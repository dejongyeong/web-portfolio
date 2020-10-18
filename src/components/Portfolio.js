import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import Project from './Projects';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    background: '#ffffff',
    height: '100%',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    height: '100%',
    margin: '4% auto',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      margin: '6% auto',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '8% auto',
    },
  },
  title: {
    textAlign: 'center',
    '& h3': {
      color: '#2e585d',
      fontWeight: '700',
      letterSpacing: '2px',
      fontFamily: 'Montserrat, sans-serif',
      textTransform: 'uppercase',
      '& span': {
        color: '#393e46',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.3rem',
      },
    },
    '& p': {
      color: '#00adb5',
      fontFamily: 'Lato, sans-serif',
      textTransform: 'lowercase',
      fontWeight: '400',
    },
  },
  projects: {
    width: '100%',
    margin: '3.5rem auto 0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '4% auto 0 auto',
    },
  },
}));

function Portfolio() {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>
          <Typography variant="h3">Works</Typography>
          <Typography variant="body1">more coming soon</Typography>
        </div>
        <div className={classes.projects}>
          <Project />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
