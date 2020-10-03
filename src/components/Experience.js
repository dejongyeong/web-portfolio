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
    width: '90%',
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
      textShadow: '1px -1px 4px rgba(182, 211, 213, 1)',
    },
    '& p': {
      color: '#00adb5',
      fontWeight: 'bold',
      fontFamily: 'Lato, sans-serif',
      textTransform: 'lowercase',
    },
    marginBottom: '3%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '7%',
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
}));

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
            Work Experience and Qualifications
          </Typography>
        </div>
        <div className={classes.timeline}>
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default Experience;
