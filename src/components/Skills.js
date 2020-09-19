import { Grid, makeStyles, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faBrain,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

// constant content
const contents = [
  {
    title: 'Technical Skills',
    icons: faCogs,
    skillList: ['Python', 'Java', 'C#', 'PHP', 'SQL Database', 'NoSQL'],
    isTip: true,
    tipText: 'In Approximate Order of Proficiency',
  },
  {
    title: 'Soft Skills',
    icons: faBrain,
    skillList: [
      'Time Management',
      'Problem-Solving',
      'Research',
      'Self-Motivated',
      'Personable',
      'Creative',
    ],
    isTip: false,
  },
  {
    title: 'Software Tools',
    icons: faEllipsisH,
    skillList: ['VS Code', 'Figma'],
    isTip: true,
    tipText: 'Experience With',
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
    margin: '0 auto 7.5% auto',
    [theme.breakpoints.down('lg')]: {
      margin: '0 auto 13% auto',
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
    margin: '15% auto 6% auto',
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
      lineHeight: '1.7rem',
    },
  },
}));

function Skills() {
  const classes = useStyle();

  return (
    <div className={classes.paperWrap}>
      <Grid container className={classes.root} spacing={0}>
        {contents.map((content) => (
          <Grid
            item
            xs={12}
            xl={4}
            key={content.title}
            className={classes.paper}
          >
            <div className={classes.skillWrap}>
              <div className={classes.aboutIcons}>
                <div className={classes.iconsContent}>
                  <FontAwesomeIcon icon={content.icons} size="3x" />
                </div>
              </div>
              {content.isTip ? (
                <Tooltip title={content.tipText} arrow placement="right">
                  <Typography variant="h6" className={classes.skillsTitle}>
                    {content.title}
                  </Typography>
                </Tooltip>
              ) : (
                <Typography variant="h6" className={classes.skillsTitle}>
                  {content.title}
                </Typography>
              )}
              <div className={classes.skillsContent}>
                {content.skillList.map((skill) => (
                  <Typography variant="body1" key={skill}>
                    {skill}
                  </Typography>
                ))}
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Skills;
