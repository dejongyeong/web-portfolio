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
    width: '100%',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  },
  main: {
    height: '100vh',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  },
  content: {
    width: '90%',
    height: '75%',
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      margin: '25% auto',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '30% auto',
    },
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
      color: '#222831',
    },
    '& h2': {
      letterSpacing: '0.15rem',
      textTransform: 'uppercase',
      fontWeight: '800',
      marginTop: '0.5%',
      textShadow: '1px -1px 4px rgba(182, 211, 213, 1)',
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
      fontWeight: '400',
      fontFamily: 'Montserrat, sans-serif',
      marginBottom: '3.5%',
    },
    [theme.breakpoints.down('md')]: {
      margin: '3.5% auto 6% auto',
    },
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    margin: '2% auto 0 auto',
  },
}));

function Hero() {
  const styles = useStyles();

  return (
    <div>
      <Parallax
        bgImage={Backdrop}
        strength={350}
        bgImageAlt="Background Image"
        bgImageStyle={{
          opacity: '60%',
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
                  An aspiring postgraduate researcher, software developer based
                  in Ireland. Passionate about building modern{' '}
                  <strong style={{ color: '#2e585d' }}>
                    Web &amp; Mobile Applications
                  </strong>{' '}
                  as well as{' '}
                  <strong style={{ color: '#2e585d' }}>
                    Artificial Intelligence
                  </strong>{' '}
                  especially in the field of Natural Language Processing &amp;
                  Autonomous Vehicles.
                </Typography>
              </div>
              <div className={styles.buttonWrapper}>
                <HeroButton profile="View More" contact="Résumé"></HeroButton>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Hero;
