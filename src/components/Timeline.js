import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Star, School, Work } from '@material-ui/icons';
import uuid from 'react-uuid';
import {
  Chip,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

const mainBackgroundColor = '#2e585b';
const subBackgroundColor = '#393e46';
const experiences = [
  {
    id: uuid(),
    class: 'vertical-timeline-element--education',
    backgroundColor: mainBackgroundColor,
    date: '2019 - present',
    icon: <School />,
    mainHeading: 'Master by Research in Engineering',
    subHeading: 'Institute of Technology, Tralee',
    description: (
      <>
        <Typography variant="body2">
          Dissertation Title:
          <br />
          Development of Machine Learning Algorithms for Autonomous Systems on
          Container Cranes.
        </Typography>
        <Typography variant="body2">
          Case studies involved{' '}
          <span style={{ color: '#00adb5' }}>
            Sensor Fusion for Object and Person Detections
          </span>{' '}
          and{' '}
          <span style={{ color: '#00adb5' }}>
            Supervised Machine Learning Safety System for Integrated Smart
            Sensors
          </span>
        </Typography>
      </>
    ),
    technology: ['Python 3', 'ROS Framework', 'C++', 'WSL', 'Linux'],
  },
  {
    id: uuid(),
    class: 'vertical-timeline-element--work',
    backgroundColor: subBackgroundColor,
    date: 'Jun - Oct 2019',
    icon: <Work />,
    mainHeading: 'Graduate Student Intern',
    subHeading: 'IMaR Technology Gateway',
    description: (
      <Typography variant="body2">
        Programmed a GUI using Python that automated crane metrics analysis and
        offered ease-of-use. Documented technical workflows and knowledge in
        private wiki for education of newly hired employees. Authored code fixes
        and enhancements for inclusion in future code release and patches. Led
        version control efforts within our team, employing Git/GitHub.
        Contributed ideas and suggestions in team meetings and delivered updates
        on deadlines, designs, and enhancements.
      </Typography>
    ),
    technology: ['Python 3', 'Tkinter', 'Git/GitHub'],
  },
  {
    id: uuid(),
    class: 'vertical-timeline-element--education',
    backgroundColor: subBackgroundColor,
    date: '2015 - 2019',
    icon: <School />,
    mainHeading: 'B.Sc. (Hons) in Computing with Software Development',
    subHeading: 'Institute of Technology, Tralee',
    description: (
      <Typography variant="body2">
        Thesis Title:
        <br />
        Sentiment Analysis Approach for Brand Reputation Evaluation
      </Typography>
    ),
    technology: [
      'Java',
      'Python',
      'C#',
      'HTML5',
      'CSS3',
      'PHP',
      'CI/CD',
      'Git/GitHub',
      'Oracle SQL',
      'MySQL',
      'MongoDB',
      'OOP',
      'Data Structures',
      'Networking',
    ],
  },
  {
    id: uuid(),
    class: 'vertical-timeline-element--work',
    backgroundColor: subBackgroundColor,
    date: 'Jan - Apr 2018',
    icon: <Work />,
    mainHeading: 'Web Developer Intern',
    subHeading: 'StoryStock (Startup)',
    description: (
      <Typography variant="body2">
        Designed, developed, and implemented new features based on analysed
        requirements. Conducted informal cognitive walkthrough and improved UX
        on the platform. Adhered to best practices for version control,
        employing Git/GitHub. Worked with CEO, Head of Story Department and
        Senior Developer to determine organizational need, designing pages to
        meet demand.
      </Typography>
    ),
    technology: [
      'PHP Laravel 5',
      'MySQL',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap 4',
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  dateStyle: {
    fontFamily: 'Lato, sans-serif',
    textTransform: 'uppercase',
    color: '#2e585b',
    [theme.breakpoints.down('1169')]: {
      color: '#c5cddd !important',
      fontSize: '0.7rem !important',
    },
  },
  chips: {
    marginTop: '5%',
    [theme.breakpoints.down('lg')]: {
      marginBottom: '3%',
    },
  },
}));

function ExperienceList() {
  const classes = useStyles();
  return experiences.map((experience) => (
    <VerticalTimelineElement
      key={experience.id}
      className={experience.class}
      contentStyle={{
        background: experience.backgroundColor,
        color: '#c5cddd',
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${experience.backgroundColor}`,
      }}
      date={experience.date}
      dateClassName={classes.dateStyle}
      iconStyle={{ background: '#ffffff', color: '#00adb5' }}
      icon={experience.icon}
    >
      <Typography variant="h5" className="vertical-timeline-element-title">
        {experience.mainHeading}
      </Typography>
      <Typography variant="h6" className="vertical-timeline-element-subtitle">
        {experience.subHeading}
      </Typography>
      {experience.description}
      <div className={classes.chips}>
        <Technology technologies={experience.technology} />
      </div>
    </VerticalTimelineElement>
  ));
}

function Technology(props) {
  return props.technologies.map((technology) => (
    <Chip
      key={technology}
      label={technology}
      size="small"
      color="secondary"
      style={{ marginRight: '1%', marginBottom: '1%', borderRadius: '0px' }}
    />
  ));
}

function Timeline() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <VerticalTimeline
        className="vertical-timeline-custom-line"
        animate={match}
      >
        <ExperienceList />
        <VerticalTimelineElement
          iconStyle={{ background: '#ffffff', color: '#00adb5' }}
          icon={<Star />}
        />
      </VerticalTimeline>
    </>
  );
}

export default Timeline;
