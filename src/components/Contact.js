import {
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Parallax } from 'react-parallax';

import Backdrop from '../img/contact-background-img.jpg';

const useStyle = makeStyles((theme) => ({
  contactLayer: {
    position: 'absolute',
    background: 'rgba(0, 173, 181, 0.15)',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100%',
    height: '100vh',
    [theme.breakpoints.down('lg')]: {
      height: '100%',
    },
  },
  contactMain: {
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      height: '100%',
      alignItems: 'center',
    },
  },
  content: {
    width: '50%',
    height: '80%',
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    boxSizing: 'border-box',
    '& h3': {
      paddingTop: '1%',
      color: '#2e585b',
      fontWeight: '700',
      letterSpacing: '4px',
      textTransform: 'uppercase',
      fontFamily: 'Montserrat, sans-serif',
      marginBottom: '0',
      marginTop: '3%',
      textAlign: 'center',
      textShadow: '1px -1px 4px rgba(182, 211, 213, 1)',
      [theme.breakpoints.down('sm')]: {
        marginTop: '7%',
        fontSize: '2.5rem',
      },
      '& span': {
        color: '#222831',
      },
    },
    [theme.breakpoints.down('lg')]: {
      margin: '7% auto 15% auto',
    },
    [theme.breakpoints.down('md')]: {
      margin: '15% auto',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '30% auto',
    },
  },
  subtitle: {
    color: '#393e46',
    fontFamily: 'Lato, sans-serif',
    textTransform: 'lowercase',
    fontWeight: '300',
    textAlign: 'center',
  },
  contactWrap: {
    margin: '3% auto 0 auto',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(46, 88, 91, 0.7)',
    padding: '2% 3%',
    boxSizing: 'border-box',
    borderRadius: '10px',
    boxShadow: '1px 1px 4px rgba(182, 211, 213, 0.1)',
  },
  copyright: {
    margin: '4% auto 1% auto',
    '& p': {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '500',
      fontSize: '0.8rem',
      color: '#222831',
      '& span': {
        color: '#00adb5',
        fontWeight: '600',
      },
    },
  },
  root: {
    flexGrow: 1,
  },
  contact: {
    width: '45%',
    height: 'auto',
    margin: '3% auto 0 auto',
    border: '1px solid black',
    color: '#222831',
  },
  about: {
    width: '100%',
    margin: '0 auto',
    '& p': {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '400',
      fontSize: '1rem',
      textAlign: 'center',
      color: '#c5cddd',
    },
  },
}));

function About() {
  return (
    <Typography variant="body1">
      Although I'm currently in full-time position of my postgraduate research,
      my inbox is always open. Whether you have a question or just want to say
      hello, i'll try my best to get back to you!!
    </Typography>
  );
}

function Contact() {
  const classes = useStyle();
  return (
    <div>
      <Parallax
        bgImage={Backdrop}
        strength={350}
        bgImageAlt="Background Image"
        bgImageStyle={{ opacity: '60%' }}
        renderLayer={() => (
          <div>
            <div className={classes.contactLayer} />
          </div>
        )}
      >
        <div className={classes.contactMain}>
          <div className={classes.content}>
            <Typography variant="h3">
              <span>Contact</span> Me
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              a little bit about me and feel free to get in touch with me
            </Typography>
            <div className={classes.contactWrap}>
              <div className={classes.about}>
                <About />
              </div>
              <div className={classes.contact}>dddd</div>
              {/* <Grid
                container
                className={classes.root}
                spacing={3}
                alignItems="center"
              >
                <Grid item xs={12} lg={5}>
                  <div className={classes.about}>
                    <About />
                  </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                  <div className={classes.forms}>sss</div>
                </Grid>
              </Grid> */}
            </div>
          </div>
          <div className={classes.copyright}>
            <Typography variant="body1">
              Design and Built by <span>De Jong Yeong</span>
            </Typography>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Contact;
