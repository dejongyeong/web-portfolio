import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    backgroundColor: '#fefefe',
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
    '& h3': {
      paddingTop: '3%',
      paddingBottom: '1.5%',
      color: '#2e585d',
      fontWeight: '600',
      letterSpacing: '3px',
      animation: `$aboutEffect 2000ms ${theme.transitions.easing.easeInOut}`,
    },
  },
  describe: {
    margin: '1% auto 2% auto',
    '& p': {
      lineHeight: '1.9rem',
      fontSize: '1.1rem',
      fontFamily: 'Lato, sans-serif',
      color: '#393e46',
      fontWeight: '400',
    },
  },
  skills: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5%',
    [theme.breakpoints.down('lg')]: {
      marginTop: '4%',
      marginBottom: '8%',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '6%',
      marginBottom: '10%',
    },
  },
  paperWrap: {
    margin: '0 auto',
    [theme.breakpoints.between('xs', '768')]: {
      width: '50%',
    },
    [theme.breakpoints.between('lg', '1023')]: {
      width: '100%',
    },
    width: '70%',
  },
  paper: {
    // border: '1px solid rgb(182 211 213)',
    height: '400px',
    //boxShadow: '1px 1px 3px #393e46',
    borderRadius: '0',
  },
  '@keyframes aboutEffect': {
    '0%': { transform: 'translate3d(0, -50px, 0)' },
    '100%': { transform: 'translate3d(0, 0, 0)' },
  },
}));

function About() {
  const classes = useStyles();
  const description = (
    <Typography variant="body1">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
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
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </Typography>
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography variant="h3">-- About Me --</Typography>
        <div className={classes.describe}>{description}</div>
        <div className={classes.skills}>
          <div className={classes.paperWrap}>
            <Grid container className={classes.root} spacing={3}>
              <Grid item lg={4} xs={12}>
                <Paper elevation={3} className={classes.paper} square={false}>
                  xs=4
                </Paper>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Paper square={false} elevation={3} className={classes.paper}>
                  xs=4
                </Paper>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Paper square={false} elevation={3} className={classes.paper}>
                  xs=4
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
