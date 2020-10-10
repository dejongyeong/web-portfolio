import React from 'react';
import { useFormik } from 'formik';
import { FormControl, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    '& label': {
      color: '#ffffff',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '300',
      fontSize: '0.85rem',
      marginBottom: '5px',
    },
    '& input': {
      border: '0',
      height: '35px',
      color: '#2e585b',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
    },
    '& textarea': {
      border: '0',
      resize: 'none',
      height: '200px',
    },
  },
  control: {
    marginBottom: '15px',
  },
  showError: {
    float: 'right',
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'lowercase',
    fontWeight: '400',
    color: '#ffc1cc',
  },
  submit: {
    height: '35px',
    border: '0',
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'uppercase',
    fontWeight: '500',
    color: '#fff',
    backgroundColor: '#222831',
    letterSpacing: '2px',
    cursor: 'pointer',
  },
}));

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = '* Required';
  }

  if (!values.email) {
    errors.email = '* Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '* Invalid email address';
  }

  if (!values.subject) {
    errors.subject = '* Required';
  }

  if (!values.message) {
    errors.message = '* Required';
  }

  return errors;
};

const ContactForm = () => {
  const classes = useStyle();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.wrapper}>
      <FormControl className={classes.control}>
        {formik.touched.name && formik.errors.name ? (
          <label htmlFor="name">
            Name <span className={classes.showError}>{formik.errors.name}</span>
          </label>
        ) : (
          <label htmlFor="name">Name</label>
        )}
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
      </FormControl>
      <FormControl className={classes.control}>
        {formik.touched.email && formik.errors.email ? (
          <label htmlFor="email">
            Email Address{' '}
            <span className={classes.showError}>{formik.errors.email}</span>
          </label>
        ) : (
          <label htmlFor="email">Email Address</label>
        )}
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </FormControl>
      <FormControl className={classes.control}>
        {formik.touched.subject && formik.errors.subject ? (
          <label htmlFor="subject">
            Subject{' '}
            <span className={classes.showError}>{formik.errors.subject}</span>
          </label>
        ) : (
          <label htmlFor="subject">Subject</label>
        )}
        <input
          id="subject"
          name="subject"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
        />
      </FormControl>
      <FormControl className={classes.control}>
        {formik.touched.message && formik.errors.message ? (
          <label htmlFor="message">
            Message{' '}
            <span className={classes.showError}>{formik.errors.message}</span>
          </label>
        ) : (
          <label htmlFor="message">Message</label>
        )}
        <textarea
          id="message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
      </FormControl>
      <button className={classes.submit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
