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
      fontWeight: '700',
      letterSpacing: '6px',
      fontFamily: 'Montserrat, sans-serif',
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
    width: '65%',
    height: '100%',
    textAlign: 'center',
    margin: '2% auto 1.5% auto',
    [theme.breakpoints.down('lg')]: {
      margin: '8% auto 2% auto',
    },
    padding: '0 1%',
  },
  describe: {
    margin: '1% auto 3% auto',
    '& p': {
      lineHeight: '1.8rem',
      fontSize: '1rem',
      fontFamily: 'Montserrat, sans-serif',
      color: '#393e46',
      fontWeight: '400',
      '& a': {
        textDecoration: 'none',
      },
      '& a:hover': {
        textDecoration: 'underline',
        textDecorationColor: '#00adb5',
      },
    },
    '& p:last-child': {
      paddingTop: '1%',
      [theme.breakpoints.down('lg')]: {
        paddingTop: '5%',
      },
    },
  },
  skills: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: '3% 1%',
    [theme.breakpoints.down('xl')]: {
      marginTop: '4%',
      marginBottom: '5%',
      padding: '5% 3%',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '9%',
      marginBottom: '9%',
      padding: '7% 5%',
    },
  },
  highlight: {
    color: '#00adb5',
    fontWeight: '600',
  },
}));

function About() {
  const classes = useStyles();

  const aboutMe = (
    <>
      <Typography variant="body1">
        Born in the mid-1990s. Raised in a city in Malaysia. I'm De Jong Yeong
        (DJ) and have always been interested in technologies, with a passion and
        eagerness to learn more about how software and artificial intelligence
        applications are built. I am a 2019 graduated Computer Science student
        at the{' '}
        <a
          href="https://www.ittralee.ie/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={classes.highlight}>
            Institute of Technology, Tralee, Ireland
          </span>
        </a>
        , focusing on{' '}
        <a
          href="http://www.ittralee.ie/en/InformationAbout/Courses/SchoolofBusinessComputingandHumanities/Computing/TL810-BScHonsinComputingSoftwareDevelopment/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={classes.highlight}>Software Development</span>
        </a>{' '}
        and currently pursuing{' '}
        <a
          href="http://www.ittralee.ie/en/InformationAbout/Courses/HigherDiplomaandPostgraduateStudies/FullorPart-timeResearchPostgraduateProgrammes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={classes.highlight}>
            Masters by Research in Engineering
          </span>
        </a>{' '}
        with awarded research scholarship. I am currently working on a
        dissertation about environment perception with multimodal sensor fusion
        for container cranes. I consider myself as a forever student, eager to
        both build on my technical skills by building side projects and stay in
        tune with the latest technologies through Medium, LinkedIn and YouTube.
        I cannot say with 100% confidence where I see myself in five years or
        what my big career goal is, due to fast-changing world of technology and
        does not have enough professional experience to be certain about such
        things. However, I know that I can provide a fresh take and an
        extraordinary approach to every project. I am always open to challenges
        and constructive feedbacks and I would like to become a team player and
        dedicate my skills and talents to develop high-quality and unique
        projects.
      </Typography>
      <Typography variant="body1">
        When I am not coding or stay in tune with new technologies, I enjoy
        playing chess and online games with friends - a great way to boost
        teamwork, destress, unwind and keep the mind sharp. Reach out to DJ to
        connect!
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
