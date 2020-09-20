import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faBrain, faTools } from '@fortawesome/free-solid-svg-icons';

// constant content
const contents = [
  {
    key: 1,
    title: 'Technical Skills',
    icons: faCogs,
    skillList: [
      'Python',
      'HTML / CSS / SCSS',
      'Java',
      'JavaScript',
      'Bootstrap / Material UI',
      'ROS Framework / C++',
      'C#',
      'MongoDB',
      'MySQL / PostgreSQL',
      'PHP Laravel 5',
    ],
    tipText: 'in approximate order of proficiency',
    isSubtitle: true,
  },
  {
    key: 2,
    title: 'Soft Skills',
    icons: faBrain,
    skillList: [
      'Time Management',
      'Prioritizing',
      'Problem Solving',
      'Teamwork/Collaboration',
      'Self-Motivated',
      'Personable',
      'Attention to Detail',
      'Communication',
      'Creative',
      'Analytical',
    ],
    isSubtitle: false,
  },
  {
    key: 3,
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
    isSubtitle: true,
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
      margin: '0 auto 9% auto',
    },
  },
  aboutIcons: {
    width: '165px',
    paddingBottom: '165px',
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
      fontSize: '0.99rem',
      textAlign: 'center',
      fontFamily: 'Lato, sans-serif',
      lineHeight: '1.7rem',
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
    <>
      {props.content.isSubtitle ? (
        <div className={props.classes.subtitle}>
          <Typography variant="body1">{props.content.tipText}</Typography>
        </div>
      ) : (
        <div className={props.classes.subtitle}>
          <Typography variant="body1">&nbsp;</Typography>
        </div>
      )}
    </>
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
      <Grid container className={classes.root} spacing={0}>
        {contents.map((content) => (
          <Grid item xs={12} xl={4} key={content.key} className={classes.paper}>
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
