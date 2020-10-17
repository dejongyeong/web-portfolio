import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: 'pink',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'inline-block',
    },
  },
}));

function Projects() {
  const classes = useStyle();

  return <div className={classes.root}>sdsds</div>;
}

export default Projects;
