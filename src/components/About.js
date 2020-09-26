import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import Skills from './Skills';

// styles
const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: 'auto',
    margin: '0 auto',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    '& h3': {
      paddingTop: '2.5%',
      paddingBottom: '1%',
      color: '#2e585d',
      fontWeight: 'bolder',
      letterSpacing: '6px',
      fontFamily: 'Lato, sans-serif',
      // [theme.breakpoints.up('xl')]: {
      //   animation: `$aboutEffect 2000ms ${theme.transitions.easing.easeInOut}`,
      // },
    },
  },
  // '@keyframes aboutEffect': {
  //   '0%': { transform: 'translate3d(0, -50px, 0)' },
  //   '100%': { transform: 'translate3d(0, 0, 0)' },
  // },
  container: {
    width: '70%',
    height: '90%',
    textAlign: 'center',
    margin: '2% auto 0 auto',
    [theme.breakpoints.down('lg')]: {
      margin: '8% auto 0 auto',
    },
  },
  describe: {
    margin: '1% auto 2% auto',
    '& p': {
      lineHeight: '1.9rem',
      fontSize: '1.05rem',
      fontFamily: 'Montserrat, sans-serif',
      color: '#393e46',
      fontWeight: '400',
    },
    '& p:last-child': {
      paddingTop: '1%',
    },
  },
  skills: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xl')]: {
      marginTop: '4%',
      marginBottom: '5%',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '9%',
      marginBottom: '9%',
    },
  },
  highlight: {
    color: '#2e585b',
    fontWeight: '600',
  },
}));

function About() {
  const classes = useStyles();

  const aboutMe = (
    <>
      <Typography variant="body1">
        Born in mid-1990s. Raised in a city in Malaysia. I'm De Jong Yeong{' '}
        <span className={classes.highlight}>(DJ)</span> and have always been
        interested in technologies, with a passion and eagerness to learn more
        about how software and artificial intelligence applications are built. I
        am a 2019 graduated Computer Science student at the{' '}
        <span className={classes.highlight}>
          Institute of Technology, Tralee, Ireland
        </span>
        , focusing on{' '}
        <span className={classes.highlight}>Software Development</span> and
        currently pursuing{' '}
        <span className={classes.highlight}>
          Master's by Research in Engineering
        </span>{' '}
        with awarded{' '}
        <span className={classes.highlight}>research scholarship</span>. I am
        currently working on a dissertation about environment perception with
        multimodal sensor fusion for container cranes. I consider myself as a
        'forever student', eager to both build on my technical skills by
        building side projects and stay in tune with the latest technologies
        through online articles. I cannot say with 100% confidence where I see
        myself in five years or what my big career goal is, due to fast-changing
        world of technology and does not have enough professional experience to
        be certain about such things. However, I know that I can provide a fresh
        take and an extraordinary approach to every project. I am always open to
        challenges and constructive feedbacks and I would like to become a team
        player and dedicate my skills to develop high-quality and unique
        projects.
      </Typography>
      <Typography variant="body1">
        When I am not coding or stay in tune with new technologies, I enjoy
        playing chess and online games with friends - a great way to boost
        teamwork, de-stress, unwind and keep the mind sharp.{' '}
        <span className={classes.highlight}>Reach out to DJ to connect!</span>
      </Typography>
    </>
  );

  // circle design - idea from brittany chiang website version 1
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography variant="h3">
          ABOUT <span style={{ color: '#393e46' }}>ME</span>
        </Typography>
        <div className={classes.describe}>{aboutMe}</div>
        <div className={classes.skills}>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
