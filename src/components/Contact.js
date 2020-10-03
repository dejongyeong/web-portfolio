import { makeStyles } from '@material-ui/core';
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
    alignItems: 'flex-start',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      height: '100%',
      alignItems: 'center',
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
        <div className={classes.contactMain}>sss</div>
      </Parallax>
    </div>
  );
}

export default Contact;
