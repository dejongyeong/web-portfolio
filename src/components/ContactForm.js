import React from 'react';
import { Formik } from 'formik';
import {
  Button,
  CircularProgress,
  Fade,
  FormControl,
  makeStyles,
  Snackbar,
} from '@material-ui/core';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import MuiAlert from '@material-ui/lab/Alert';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

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
      color: '#2e585b',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '500',
      [theme.breakpoints.down('1281')]: {
        height: '140px',
      },
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
    borderRadius: '0',
    color: '#fff',
    backgroundColor: '#222831',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#00adb5',
      borderColor: '#00adb5',
    },
    '& p': {
      fontFamily: 'Montserrat, sans-serif',
      textTransform: 'uppercase',
      fontWeight: '300',
      fontSize: '1em',
      letterSpacing: '1.5px',
      '& span': {
        color: 'white',
      },
    },
  },
  message: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('* Required'),
  email: Yup.string().email('* Invalid email!').required('* required'),
  subject: Yup.string().required('* Required'),
  message: Yup.string().required('* Required'),
});

// Tutorial: https://waterydan.com/posts/5f7d0b2e709bdc001ecff6b1
// Tutorial: https://formik.org/docs/guides/validation
// Tutorial: https://medium.com/@olivertate274/how-to-clear-input-form-with-formik-react-47a6ce27c0d9
const ContactForm = () => {
  const classes = useStyle();

  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [msg, setMsg] = React.useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // Material UI snackbar error when  update to latest version ^5.0 due to transition
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        TransitionComponent={Fade}
        style={{ width: '90%' }}
      >
        <Alert
          onClose={handleClose}
          severity={status}
          style={{ width: '100%', fontSize: '.8rem' }}
        >
          {msg}
        </Alert>
      </Snackbar>
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            emailjs
              .sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                  from_name: values.name,
                  from_email: values.email,
                  subject: values.subject,
                  message: values.message,
                },
                USER_ID
              )
              .then(() => {
                setSubmitting(false);
                setStatus('success');
                setMsg(
                  'Email sent. Will get back to you as soon as possible!!'
                );
                setOpen(true);
                resetForm({ values: '' });
              })
              .catch(() => {
                setSubmitting(false);
                setStatus('error');
                setMsg('Oops! Something went wrong. Please try again.');
                setOpen(true);
              });
          }, 500);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className={classes.wrapper}>
            <FormControl className={classes.control}>
              {formik.touched.name && formik.errors.name ? (
                <label htmlFor="name">
                  Name{' '}
                  <span className={classes.showError}>
                    {formik.errors.name}
                  </span>
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
                  <span className={classes.showError}>
                    {formik.errors.email}
                  </span>
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
                  <span className={classes.showError}>
                    {formik.errors.subject}
                  </span>
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
                  <span className={classes.showError}>
                    {formik.errors.message}
                  </span>
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
            <Button
              className={classes.submit}
              type="submit"
              disabled={formik.isSubmitting}
              endIcon={
                formik.isSubmitting && (
                  <CircularProgress style={{ color: '#ffffff' }} size={15} />
                )
              }
            >
              {formik.isSubmitting ? (
                <p>
                  <span>Submitting</span>
                </p>
              ) : (
                <p>Submit</p>
              )}
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
