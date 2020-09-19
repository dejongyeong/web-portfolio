import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faBrain,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
    marginBottom: '5%',
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
  paperWrap: {
    width: '100%',
    margin: '0 auto',
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto 15% auto',
  },

  aboutIcons: {
    width: '175px',
    paddingBottom: '175px',
    borderRadius: '50%',
    backgroundColor: '#2e5b5d',
    position: 'relative',
    color: '#ffffff',
  },
  iconsContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  skillsTitle: {
    margin: '15% auto 3% auto',
    color: '#2e585b',
    fontSize: '1rem',
    fontFamily: 'Lato, san-serif',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  skillsContent: {
    '& p': {
      color: '#222831',
      fontSize: '1rem',
      textAlign: 'center',
      fontFamily: 'Montserrat, sans-serif',
    },
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

  // circle design - idea from brittany chiang website version 1
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography variant="h3">-- About Me --</Typography>
        <div className={classes.describe}>{description}</div>
        <div className={classes.skills}>
          <div className={classes.paperWrap}>
            <Grid container className={classes.root} spacing={0}>
              <Grid item xl={4} xs={12} className={classes.paper}>
                <div style={{ display: 'block' }}>
                  <div className={classes.aboutIcons}>
                    <div className={classes.iconsContent}>
                      <FontAwesomeIcon icon={faCogs} size="3x" />
                    </div>
                  </div>
                  <Typography variant="h6" className={classes.skillsTitle}>
                    Technical Skills
                  </Typography>
                  <div className={classes.skillsContent}>
                    <Typography variant="body1">sss</Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xl={4} xs={12} className={classes.paper}>
                <div style={{ display: 'block' }}>
                  <div className={classes.aboutIcons}>
                    <div className={classes.iconsContent}>
                      <FontAwesomeIcon icon={faBrain} size="3x" />
                    </div>
                  </div>
                  <Typography variant="h6" className={classes.skillsTitle}>
                    Soft Skills
                  </Typography>
                  <div className={classes.skillsContent}>
                    <Typography variant="body1">sss</Typography>
                  </div>
                </div>
              </Grid>
              <Grid item xl={4} xs={12} className={classes.paper}>
                <div style={{ display: 'block' }}>
                  <div className={classes.aboutIcons}>
                    <div className={classes.iconsContent}>
                      {' '}
                      <FontAwesomeIcon icon={faEllipsisH} size="3x" />
                    </div>
                  </div>
                  <Typography variant="h6" className={classes.skillsTitle}>
                    Others
                  </Typography>
                  <div className={classes.skillsContent}>
                    <Typography variant="body1">sss</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
