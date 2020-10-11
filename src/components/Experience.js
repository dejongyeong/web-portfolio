import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import Timeline from './Timeline';

const useStyles = makeStyles((theme) => ({
  expWrapper: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: 'auto',
    margin: '0 auto',
    display: 'flex',
  },
  expContainer: {
    width: '80%',
    [theme.breakpoints.down('md')]: {
      width: '85%',
    },
    height: '100%',
    margin: '1% auto 4% auto',
    [theme.breakpoints.between('767', 'xl')]: {
      margin: '4% auto 2% auto',
    },
    [theme.breakpoints.down('lg')]: {
      margin: '6.5% auto 4% auto',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '6.5% auto 7% auto',
    },
    padding: '0 1.5%',
  },
  expDescribe: {
    textAlign: 'center',
    marginTop: '1%',
    '& h3': {
      marginTop: '0.5%',
      color: '#2e585d',
      fontWeight: '700',
      letterSpacing: '4px',
      fontFamily: 'Montserrat, sans-serif',
      textTransform: 'uppercase',
      '& span': {
        color: '#393e46',
      },
      [theme.breakpoints.down('sm')]: {
        margin: '7% 0 3% 0',
        fontSize: '2.5rem',
      },
    },
    '& p': {
      color: '#393e46',
      fontWeight: '400',
      fontFamily: 'Lato, sans-serif',
      textTransform: 'lowercase',
    },
    marginBottom: '2%',
    [theme.breakpoints.down('xl')]: {
      marginBottom: '3%',
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: '4%',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '6%',
    },
  },
  timeline: {
    marginBottom: '3%',
    [theme.breakpoints.down('lg')]: {
      marginBottom: '6%',
    },
    '& h5': {
      fontSize: '1.05em',
      fontWeight: 'bold',
      color: '#ffffff !important',
    },
    '& h6': {
      fontSize: '0.89rem',
      fontFamily: 'Lato, sans-serif',
      color: '#ffffff !important',
    },
    '& p': {
      fontSize: '0.8rem',
    },
  },
  about: {
    width: '90%',
    margin: '0 auto',
    padding: '1.5%',
    marginBottom: '2%',
    [theme.breakpoints.down('lg')]: {
      marginBottom: '5%',
      padding: '3%',
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto 7% auto',
      padding: '5%',
    },
    '& p': {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '27px',
      color: '#2e585b',
      textAlign: 'center',
    },
    '& a': {
      textDecoration: 'none',
      '& span': {
        color: '#00adb5',
      },
    },
    '& a:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#2e585b',
    },
    backgroundColor: 'rgba(182, 211, 213, 0.2)',
    borderRadius: '10px',
  },
}));

function About() {
  return (
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
          <span>Institute of Technology, Tralee, Ireland</span>
        </a>
        , focusing on{' '}
        <a
          href="http://www.ittralee.ie/en/InformationAbout/Courses/SchoolofBusinessComputingandHumanities/Computing/TL810-BScHonsinComputingSoftwareDevelopment/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Software Development</span>
        </a>{' '}
        and currently pursuing{' '}
        <a
          href="http://www.ittralee.ie/en/InformationAbout/Courses/HigherDiplomaandPostgraduateStudies/FullorPart-timeResearchPostgraduateProgrammes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Masters by Research in Engineering</span>
        </a>{' '}
        with awarded research scholarship. I consider myself as a forever
        student, eager to both build on my technical skills by building side
        projects and stay in tune with the latest technologies through Medium,
        LinkedIn and YouTube. I cannot say with 100% confidence where I see
        myself in five years or what my big career goal is, due to fast-changing
        world of technology and does not have enough professional experience to
        be certain about such things. However, I know that I can provide a fresh
        take and an extraordinary approach to every project. I am always open to
        challenges and constructive feedbacks and I would like to become a team
        player and dedicate my skills and talents to develop high-quality and
        unique projects. When I am not coding or stay in tune with new
        technologies, I enjoy playing chess and online games with friends - a
        great way to boost teamwork, unwind, de-stress and keep the mind sharp.
      </Typography>
    </>
  );
}

// timeline from: https://www.npmjs.com/package/react-vertical-timeline-component
function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.expWrapper}>
      <div className={classes.expContainer}>
        <div className={classes.expDescribe}>
          <Typography variant="h3">
            My <span>Journey</span>
          </Typography>
          <Typography variant="body1">
            A little bit about me, Work Experience and Qualifications
          </Typography>
        </div>
        <div className={classes.about}>
          <About />
        </div>
        <div className={classes.timeline}>
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default Experience;
