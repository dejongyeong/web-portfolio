import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import Timeline from './Timeline';

const useStyles = makeStyles((theme) => ({
  expWrapper: {
    backgroundColor: '#f0f0f0',
    height: '100%',
    width: 'auto',
    margin: '0 auto',
    display: 'flex',
  },
  expContainer: {
    width: '80%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    height: '100%',
    margin: '1% auto 5% auto',
    [theme.breakpoints.between('767', 'xl')]: {
      margin: '4% auto 2% auto',
    },
    [theme.breakpoints.down('lg')]: {
      margin: '6.5% auto 2% auto',
    },
    padding: '0 1.5%',
  },
  expDescribe: {
    textAlign: 'center',
    '& h3': {
      marginTop: '1%',
      color: '#2e585d',
      fontWeight: '700',
      letterSpacing: '5px',
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
      color: '#00adb5',
      fontWeight: '400',
      fontFamily: 'Lato, sans-serif',
    },
    marginBottom: '3%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '7%',
      marginBottom: '6%',
    },
  },
  timeline: {
    marginBottom: '4%',
    [theme.breakpoints.down('lg')]: {
      marginBottom: '5%',
    },
  },
  dateStyle: {
    fontFamily: 'Lato, sans-serif',
    textTransform: 'uppercase',
    color: '#2e585b',
    [theme.breakpoints.down('1169')]: {
      color: '#fff',
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
            <span>My</span> Journey
          </Typography>
          <Typography variant="body1">
            Previous Work Experience and Qualifications
          </Typography>
        </div>
        <div className={classes.timeline}>
          <Timeline styles={classes} />
        </div>
      </div>
    </div>
  );
}

export default Experience;
