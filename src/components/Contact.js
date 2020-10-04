import { makeStyles, Typography } from '@material-ui/core';
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
    width: '85%',
    height: '90%',
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    textAlign: 'center',
    '& h3': {
      paddingTop: '1%',
      color: '#2e585b',
      fontWeight: '700',
      letterSpacing: '4px',
      textTransform: 'uppercase',
      fontFamily: 'Montserrat, sans-serif',
      marginBottom: '0',
      marginTop: '3%',
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
  contactWrap: {
    width: '100%',
    height: '100%',
    margin: '3% auto 0 auto',
    backgroundColor: 'rgba(46, 88, 91, 0.5)',
    borderRadius: '10px',
    boxShadow: '1px 1px 4px rgba(182, 211, 213, 0.2)',
  },
  copyright: {
    margin: '2% auto 0 auto',
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
}));

function Contact() {
  const classes = useStyle();

  return (
    <div>
      <Parallax
        bgImage={Backdrop}
        strength={350}
        bgImageAlt="Background Image"
        bgImageStyle={{ opacity: '80%' }}
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
            <Typography
              variant="body1"
              style={{
                color: '#222831',
                fontFamily: 'Lato, sans-serif',
                textTransform: 'lowercase',
                fontWeight: '400',
              }}
            >
              a little bit about me and feel free to get in touch with me
            </Typography>
            <div className={classes.contactWrap}>sss</div>
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
