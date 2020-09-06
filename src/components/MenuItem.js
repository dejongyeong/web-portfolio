import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    flexGrow: 1,
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      '& a': {
        marginLeft: '2%',
        textDecoration: 'none',
        color: '#2e585d',
      },
      '& a > h6': {
        fontSize: '0.85rem',
        fontWeight: '400',
        letterSpacing: '0.2rem',
        padding: '9px',
        // border: '1px solid #fff',
        // color: '#000',
        // transition: 'border 10s',
      },
    },
  },
}));

function MenuItem() {
  const classes = useStyles();

  return (
    <div className={classes.sectionDesktop}>
      <a href="/">
        <Typography variant="h6">Home</Typography>
      </a>
      <a href="/">
        <Typography variant="h6">Portfolio</Typography>
      </a>
      <a href="/">
        <Typography variant="h6">Experience</Typography>
      </a>
      <a href="/">
        <Typography variant="h6">Contact</Typography>
      </a>
      <a href="/">
        <Typography variant="h6">Resume</Typography>
      </a>
    </div>
  );
}

export default MenuItem;
