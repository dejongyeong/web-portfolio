import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sectionMobile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    margin: '8% 0',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
    width: '80%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  paper: {
    boxSizing: 'border-box',
    height: '600px',
    width: '100%',
    textAlign: 'center !important',
    backgroundColor: 'rgba(46, 88, 91, 0.9)',
    color: '#ffffff',
    padding: '3% 5px',
    '& h5': {
      fontSize: '1.2rem',
      fontFamily: 'Lato, san-serif',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '2px',
      color: '#071921',
    },
  },
  icons: {
    margin: '30px auto 20px auto',
    color: '#051a1b',
  },
  title: {
    marginTop: '10px',
    '& p': {
      fontFamily: 'Lato, san-serif',
      fontSize: '0.89rem',
      paddingTop: '2px',
      textTransform: 'lowercase',
      color: '#00adb5',
    },
  },
  lists: {
    marginTop: '35px',
    '& p': {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '0.9rem',
      lineHeight: '30px',
      color: '#c5cddd',
    },
  },
  wrapper: {
    width: '100%',
    margin: '0 auto',
  },
}));

// skill listing
// future improvement: pass to parent for rendering if possible
// is it possible to pass styles from parent to child??
function SkillLists(props) {
  return (
    <>
      {props.content.skillList.map((skill) => (
        <Typography variant="body1" key={skill}>
          {skill}
        </Typography>
      ))}
    </>
  );
}

// reference: https://www.npmjs.com/package/react-responsive-carousel
function MobileSkills(props) {
  const classes = useStyles();
  return (
    <div className={classes.sectionMobile}>
      <div className={classes.wrapper}>
        <Carousel
          autoPlay
          showArrows
          showStatus={false}
          infiniteLoop
          showThumbs={false}
          interval={4000}
          transitionTime={600}
          width="100%"
        >
          {props.contents.map((content) => (
            <Paper
              elevation={2}
              className={classes.paper}
              key={content.key}
              square={true}
            >
              <div className={classes.icons}>
                <FontAwesomeIcon icon={content.icons} size="3x" />
              </div>
              <div className={classes.title}>
                <Typography variant="h5">{content.title}</Typography>
                <Typography variant="body1">{content.subtitle}</Typography>
              </div>
              <div className={classes.lists}>
                <SkillLists content={content} />
              </div>
            </Paper>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MobileSkills;
