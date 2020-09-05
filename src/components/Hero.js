import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Parallax } from 'react-parallax';

import HeroButton from './HeroButton';
import SocialIcons from './SocialIcons';

import Backdrop from '../img/hero-background-img.jpg';
import Avatar from '../img/hero-avatar.png';

const useStyles = makeStyles((theme) => ({
  layer: {
    position: 'absolute',
    background: 'rgba(0, 173, 181, 0.15)',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      height: '120vh',
      width: '120vw',
    },
  },
  main: {
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '120vh',
    },
  },
  content: {
    width: '90%',
    height: '80%',
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  avatar: {
    maxWidth: '220px',
    height: 'auto',
    width: '100%',
    display: 'block',
    margin: '0 auto',
  },
  icons: {
    maxWidth: '220px',
    width: '100%',
    boxSizing: 'border-box',
    margin: '0.9% auto',
    [theme.breakpoints.down('md')]: {
      margin: '2% auto',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '2% auto 3% auto',
    },
  },
  intro: {
    width: '100%',
    height: 'auto',
    textAlign: 'center',
    marginTop: '1.5%',
    color: '#2e585b',
    '& h6': {
      letterSpacing: '0.1rem',
      fontWeight: '400',
      fontFamily: 'Lato, sans-serif',
      fontSize: '1rem',
      textTransform: 'lowercase',
      color: '#393e46',
    },
    '& h2': {
      letterSpacing: '0.15rem',
      textTransform: 'uppercase',
      fontWeight: '800',
      marginTop: '0.5%',
    },
  },
  description: {
    width: '75%',
    height: 'auto',
    margin: '1% auto 2% auto',
    lineHeight: '1.5rem',
    '& p': {
      color: '#222831',
      fontSize: '1.05rem',
      fontWeight: 'normal',
      fontFamily: 'Lato, sans-serif',
    },
    [theme.breakpoints.down('md')]: {
      margin: '3.5% auto 6% auto',
    },
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 'auto',
    margin: '2% auto 0 auto',
  },
}));

function Hero() {
  const styles = useStyles();

  return (
    <div id="landing-page">
      <Parallax
        bgImage={Backdrop}
        strength={200}
        bgImageAlt="Background Image"
        bgImageStyle={{
          opacity: '50%',
        }}
        renderLayer={() => (
          <div>
            <div className={styles.layer} />
          </div>
        )}
      >
        <div className={styles.main}>
          <div className={styles.content}>
            <img alt="Avatar PNG" src={Avatar} className={styles.avatar} />
            <div className={styles.icons}>
              <SocialIcons />
            </div>
            <div className={styles.intro}>
              <Typography variant="h6">Hello World! I'm</Typography>
              <Typography variant="h2">
                De Jong <span style={{ color: '#393e46' }}>Yeong</span>
              </Typography>
              <div className={styles.description}>
                <Typography variant="body1">
                  A Postgraduate Researcher, Software Developer based in
                  Ireland. Passionate about building{' '}
                  <strong style={{ color: '#2e585d' }}>
                    Web &amp; Mobile Applications
                  </strong>{' '}
                  and{' '}
                  <strong style={{ color: '#2e585d' }}>
                    Artificial Intelligence
                  </strong>{' '}
                  especially in the field of Natural Language Processing &amp;
                  Autonomous Vehicles
                </Typography>
              </div>
              <div className={styles.buttonWrapper}>
                <HeroButton profile="View More" contact="Resume"></HeroButton>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Hero;
