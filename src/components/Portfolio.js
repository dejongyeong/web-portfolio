import { Button, makeStyles, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';

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
    border: '1px solid black',
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
      color: '#393e46',
      fontFamily: 'Lato, sans-serif',
      textTransform: 'lowercase',
      fontWeight: '400',
    },
  },
  projects: {
    width: '100%',
    margin: '2% auto 0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '4% auto 0 auto',
    },
    border: '1px solid black',
  },
  viewMore: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.9rem',
    fontFamily: 'Montserrat, sans-serif',
    '& .viewButton': {
      color: '#2e585b',
      fontWeight: '500',
    },
  },
}));

function Portfolio() {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>
          <Typography variant="h3">Projects</Typography>
          <Typography variant="body1">more coming soon</Typography>
        </div>
        <div className={classes.projects}>sdsdsakdjaslk</div>
        <div className={classes.viewMore}>
          <Button className="viewButton">
            View More <ExpandMore />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
