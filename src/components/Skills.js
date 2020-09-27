import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faBrain,
  faTools,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

// constant content
const contents = [
  {
    key: 1,
    title: 'Technical Skills',
    icons: faCogs,
    skillList: [
      'Python',
      'HTML • CSS • SCSS',
      'Java',
      'JavaScript',
      'Bootstrap 4',
      'Material UI',
      'SQL • NoSQL',
      'C#',
      'PHP Laravel 5',
      'ROS • C++',
    ],
    tipText: 'expertise in approx. order',
  },
  {
    key: 2,
    title: 'Software Tools',
    icons: faTools,
    skillList: [
      'Git / GitHub',
      'IntelliJ IDEA',
      'PyCharm IDE',
      'Visual Studio',
      'VS Code',
      'Trello',
      'Slack',
      'Figma',
      'Heroku',
      'Travis CI',
    ],
    tipText: 'experience with',
  },
  {
    key: 3,
    title: 'Soft Skills',
    icons: faBrain,
    skillList: [
      'Time Management',
      'Prioritizing',
      'Problem Solving',
      'Teamwork',
      'Self-Motivated',
      'Personable',
      'Attention to Detail',
      'Communication',
      'Creative',
      'Analytical',
    ],
    tipText: 'personality traits',
  },
  {
    key: 4,
    title: 'Languages',
    icons: faGlobe,
    skillList: ['Mandarin', 'English', 'Cantonese', 'Malaysian Malay'],
    tipText: 'in order of proficiency',
  },
];

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  skillWrap: {
    display: 'block',
    textAlign: 'center',
    margin: '0 auto',
  },
  paperWrap: {
    width: '100%',
    margin: '0 auto',
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    [theme.breakpoints.down('lg')]: {
      margin: '0 auto 8% auto',
    },
  },
  aboutIcons: {
    width: '140px',
    paddingBottom: '140px',
    borderRadius: '50%',
    backgroundColor: '#2e5b5d',
    position: 'relative',
    color: '#ffffff',
    margin: '0 auto',
  },
  iconsContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  skillsTitle: {
    margin: '15% auto 0 auto',
    color: '#2e585b',
    fontSize: '1rem',
    fontFamily: 'Lato, san-serif',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  skillsContent: {
    '& p': {
      color: '#222831',
      fontSize: '0.88rem',
      textAlign: 'center',
      fontFamily: 'Montserrat, sans-serif',
      lineHeight: '1.75rem',
      fontWeight: '400',
    },
  },
  subtitle: {
    margin: '0 auto 8% auto',
    '& p': {
      fontSize: '0.8rem',
      color: '#00adb5',
      textTransform: 'lowercase',
    },
  },
}));

// subtitle
function Subtitle(props) {
  return (
    <div className={props.classes.subtitle}>
      <Typography variant="body1">{props.content.tipText}</Typography>
    </div>
  );
}

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
    <div className={classes.paperWrap}>
      <Grid
        container
        className={classes.root}
        spacing={0}
        justify="space-between"
        alignItems="flex-start"
      >
        {contents.map((content) => (
          <Grid
            item
            xs={12}
            lg={6}
            xl={3}
            key={content.key}
            className={classes.paper}
          >
            <div className={classes.skillWrap}>
              <div className={classes.aboutIcons}>
                <div className={classes.iconsContent}>
                  <FontAwesomeIcon icon={content.icons} size="3x" />
                </div>
              </div>
              <Typography variant="h6" className={classes.skillsTitle}>
                {content.title}
              </Typography>
              <Subtitle content={content} classes={classes} />
              <div className={classes.skillsContent}>
                <SkillLists content={content} />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Skills;
