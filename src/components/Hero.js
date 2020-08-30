import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Parallax } from 'react-parallax';

import Backdrop from '../img/hero-background-img.jpg';
import Avatar from '../img/hero-avatar.png';

const useStyles = makeStyles((theme) => ({
  main: {
    height: '100vh',
    width: 'auto',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    //TODO: Fix Break Points
    [theme.breakpoints.down('sm')]: {
      height: '155vh',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: '120vh',
    },
  },
  layer: {
    position: 'absolute',
    background: 'rgba(0, 173, 181, 0.15)',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      height: '155vh',
      width: '155vw',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: '120vh',
      width: '120vw',
    },
  },
  content: {
    width: '80%',
    height: '90vh',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      height: '95vh',
      width: '90%',
    },
    position: 'relative',
  },
  gridWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: 'auto',
  },
  avatar: {
    maxWidth: '400px',
    height: 'auto',
    width: '100%',
    display: 'block',
    margin: '0 auto',
    [theme.breakpoints.up('xxxl')]: {
      maxWidth: '600px',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '290px',
      marginTop: '2%',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '200px',
    },
  },
  rightContent: {
    [theme.breakpoints.between('xs', 'lg')]: {
      textAlign: 'center',
      marginTop: '3%',
    },
    display: 'inline-block',
    textAlign: 'left',
    padding: '1.5%',
    color: '#101010',

    '& h1': {
      [theme.breakpoints.up('xl')]: {
        fontSize: '6.1vw',
      },
      [theme.breakpoints.between('767', '1024')]: {
        fontSize: '7vw',
      },
      [theme.breakpoints.between('519', '767')]: {
        fontSize: '9vw',
      },
      [theme.breakpoints.between('xs', '519')]: {
        fontSize: '9.1vw',
      },
    },

    '& p': {
      fontWeight: '400',
      margin: '2% auto',
      paddingLeft: '0.5%',
      fontFamily: 'Montserrat, sans-serif',
      [theme.breakpoints.up('xxl')]: {
        fontSize: '1.05vw',
      },
      [theme.breakpoints.between('xs', '768')]: {
        fontSize: '0.90rem',
        marginTop: '5%',
        lineHeight: '1.3rem',
      },
    },
  },
}));

function Hero() {
  const styles = useStyles();

  return (
    <div id="landing-page">
      <Parallax
        bgImage={Backdrop}
        strength={100}
        bgImageAlt="Background Image"
        bgImageStyle={{
          opacity: '50%',
        }}
        renderLayer={() => (
          <div>
            <div className={styles.layer} />
          </div>
        )}
      >
        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.gridWrapper}>
              <Grid container>
                <Grid
                  container
                  item
                  xs={12}
                  xl={4}
                  alignItems="center"
                  justify="center"
                >
                  <img
                    alt="Avatar PNG"
                    src={Avatar}
                    className={styles.avatar}
                  />
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  xl={8}
                  className={styles.rightContent}
                >
                  <Typography variant="h1" gutterBottom>
                    Hi, I'm <span style={{ color: '#2e585b' }}>De Jong.</span>
                  </Typography>
                  <Typography variant="body1">
                    I'm a{' '}
                    <span style={{ color: '#2e585b', fontWeight: 'bold' }}>
                      Postgraduate Research Student.
                    </span>{' '}
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur?"
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Hero;
