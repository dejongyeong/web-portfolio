import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Parallax } from 'react-parallax';

import Backdrop from '../img/hero-background-img.jpg';
import Avatar from '../img/hero-avatar.png';

const useStyles = makeStyles((theme) => ({
  main: {
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '110vh',
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
      height: '110vh',
      width: '110vw',
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
    [theme.breakpoints.up('xxl')]: {
      maxWidth: '90%',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '290px',
      marginTop: '2%',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '230px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '60%',
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
        fontSize: '5.25vw',
      },
      [theme.breakpoints.down('lg', '1023')]: {
        fontSize: '7vw',
      },
      [theme.breakpoints.between('519', '767')]: {
        fontSize: '8vw',
      },
      [theme.breakpoints.between('xs', '519')]: {
        fontSize: '9vw',
        marginTop: '4%',
      },
    },

    '& p': {
      fontWeight: '400',
      margin: '2% auto',
      paddingLeft: '0.5%',
      fontFamily: 'Montserrat, sans-serif',
      [theme.breakpoints.up('xxl')]: {
        fontSize: '1.02vw',
      },
      [theme.breakpoints.between('xs', '768')]: {
        fontSize: '80%',
        marginTop: '5%',
        lineHeight: '1.4rem',
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
