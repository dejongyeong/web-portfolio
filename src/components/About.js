import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import Skills from './Skills';

const aboutMe = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
minima veniam, quis nostrum exercitationem ullam corporis suscipit
laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

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
  },
  container: {
    width: '80%',
    height: '90%',
    textAlign: 'center',
    margin: '3% auto 0 auto',
    [theme.breakpoints.down('lg')]: {
      margin: '10% auto 0 auto',
    },
    '& h3': {
      paddingTop: '3%',
      paddingBottom: '1.5%',
      color: '#2e585d',
      fontWeight: '600',
      letterSpacing: '3px',
      [theme.breakpoints.up('xl')]: {
        animation: `$aboutEffect 2000ms ${theme.transitions.easing.easeInOut}`,
      },
    },
  },
  '@keyframes aboutEffect': {
    '0%': { transform: 'translate3d(0, -50px, 0)' },
    '100%': { transform: 'translate3d(0, 0, 0)' },
  },
  describe: {
    margin: '1% auto 2% auto',
    '& p': {
      lineHeight: '1.9rem',
      fontSize: '1.1rem',
      fontFamily: 'Montserrat, sans-serif',
      color: '#393e46',
      fontWeight: '400',
    },
  },
  skills: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3%',
    [theme.breakpoints.down('xl')]: {
      marginTop: '8%',
      marginBottom: '8%',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '9%',
      marginBottom: '10%',
    },
  },
}));

function About() {
  const classes = useStyles();
  const description = <Typography variant="body1">{aboutMe}</Typography>;

  // circle design - idea from brittany chiang website version 1
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography variant="h3">About Me</Typography>
        <div className={classes.describe}>{description}</div>
        <div className={classes.skills}>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
