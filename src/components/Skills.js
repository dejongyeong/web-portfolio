import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faBrain,
  faTools,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import uuid from 'react-uuid';
import { Parallax } from 'react-parallax';

import Backdrop from '../img/skills-background-img.jpg';
import MobileSkills from './MobileSkills';

// constant content
const contents = [
  {
    key: uuid(),
    title: 'Technical',
    subtitle: 'Continuously Learning',
    icons: faCogs,
    skillList: [
      'Python',
      'HTML • CSS • SCSS',
      'Java ',
      'Bootstrap 4',
      'JavaScript',
      'Oracle SQL / MySQL',
      'MongoDB',
      'PHP Laravel 5',
      'Material UI',
      'C#',
      'ROS Framework',
    ],
  },
  {
    key: uuid(),
    title: 'Tools',
    subtitle: 'experience with',
    icons: faTools,
    skillList: [
      'Git / GitHub',
      'Trello',
      'Slack',
      'PyCharm IDE',
      'IntelliJ IDEA',
      'VS Code',
      'Figma',
      'Heroku',
      'Travis CI',
      'Visual Studio',
      'Photoshop CS5',
    ],
  },
  {
    key: uuid(),
    title: 'Soft Skills',
    subtitle: 'personality traits',
    icons: faBrain,
    skillList: [
      'Time Management',
      'Teamwork',
      'Communication',
      'Self-Motivation',
      'Well Structured',
      'Open-mindedness',
      'Attention to Detail',
      'Problem Solving',
      'Creative',
      'Logical',
      'Analytical',
    ],
  },
  {
    key: uuid(),
    title: 'Languages',
    subtitle: 'in order of proficiency',
    icons: faGlobe,
    skillList: ['Mandarin', 'English', 'Cantonese', 'Malaysian Malay'],
  },
];

const useStyle = makeStyles((theme) => ({
  skillsLayer: {
    position: 'absolute',
    background: 'rgba(0, 173, 181, 0.15)',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100%',
    height: '100vh',
    [theme.breakpoints.down('lg')]: {
      height: '100%',
    },
  },
  skillsMain: {
    height: '100vh',
    width: '100%',
    alignItems: 'flex-start',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      height: '100%',
      alignItems: 'center',
    },
  },
  skillContents: {
    width: '70%',
    height: '85%',
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    textAlign: 'center',
    '& h3': {
      padding: '1% 0 0 0',
      color: '#2e585d',
      fontWeight: '700',
      letterSpacing: '4px',
      textTransform: 'uppercase',
      fontFamily: 'Montserrat, sans-serif',
      marginBottom: '0',
      marginTop: '8%',
      textShadow: '1px -1px 4px rgba(182, 211, 213, 1)',
      [theme.breakpoints.down('sm')]: {
        marginTop: '7%',
        fontSize: '2.5rem',
      },
      // [theme.breakpoints.up('xl')]: {
      //   animation: `$aboutEffect 2000ms ${theme.transitions.easing.easeInOut}`,
      // },
    },
    '& span': {
      color: '#222831',
    },
    [theme.breakpoints.down('lg')]: {
      margin: '7% auto 15% auto',
    },
    [theme.breakpoints.down('md')]: {
      margin: '15% auto',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '30% auto',
    },
    // '@keyframes aboutEffect': {
    //   '0%': { transform: 'translate3d(0, -50px, 0)' },
    //   '100%': { transform: 'translate3d(0, 0, 0)' },
    // },
  },
  skillsWrapper: {
    width: '95%',
    boxSizing: 'border-box',
    margin: '3% auto 0 auto',
    padding: '0',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'inline',
    },
    [theme.breakpoints.between('768', '1023')]: {
      margin: '6% auto 0 auto',
    },
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    boxSizing: 'border-box',
    height: '550px',
    width: '100%',
    textAlign: 'center !important',
    backgroundColor: 'rgba(46, 88, 91, 0.8)',
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
    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        transform: 'translate(0, -10px)',
        msTransform: 'translate(0, -10px)',
      },
      transition: 'transform 0.3s ease-out',
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
}));

// skill listing
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

function Skills() {
  const classes = useStyle();

  return (
    <div>
      <Parallax
        bgImage={Backdrop}
        strength={350}
        bgImageAlt="Background Image"
        bgImageStyle={{ opacity: '60%' }}
        renderLayer={() => (
          <div>
            <div className={classes.skillsLayer} />
          </div>
        )}
      >
        <div className={classes.skillsMain}>
          <div className={classes.skillContents}>
            <Typography variant="h3">
              My <span>Skills</span>
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: '#393e46',
                fontFamily: 'Lato, sans-serif',
                fontWeight: '300',
                textTransform: 'lowercase',
              }}
            >
              Continuously Learning Technical Skills and Personal Qualities
            </Typography>
            <div className={classes.skillsWrapper}>
              <Grid
                container
                className={classes.root}
                spacing={3}
                alignItems="center"
              >
                {contents.map((content) => (
                  <Grid item xs={12} lg={6} xl={3} key={content.key}>
                    <Paper elevation={2} className={classes.paper}>
                      <div className={classes.icons}>
                        <FontAwesomeIcon icon={content.icons} size="3x" />
                      </div>
                      <div className={classes.title}>
                        <Typography variant="h5">{content.title}</Typography>
                        <Typography variant="body1">
                          {content.subtitle}
                        </Typography>
                      </div>
                      <div className={classes.lists}>
                        <SkillLists content={content} />
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </div>
            <MobileSkills contents={contents} />
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Skills;
