import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Star, School, Work } from '@material-ui/icons';
import uuid from 'react-uuid';
import { makeStyles, Typography } from '@material-ui/core';

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
    description:
      'Creative Direction, User Experience, Visual Design, Project Management,Team Leading',
  },
  {
    id: uuid(),
    class: 'vertical-timeline-element--work',
    backgroundColor: subBackgroundColor,
    date: 'Jun - Oct 2019',
    icon: <Work />,
    mainHeading: 'Graduate Student Intern',
    subHeading: 'IMaR Technology Gateway',
    description:
      'Creative Direction, User Experience, Visual Design, Project Management,Team Leading',
  },
  {
    id: uuid(),
    class: 'vertical-timeline-element--education',
    backgroundColor: subBackgroundColor,
    date: '2015 - 2019',
    icon: <School />,
    mainHeading: 'B.Sc.(Hons) in Computing with Software Development',
    subHeading: 'Institute of Technology, Tralee',
    description:
      'Creative Direction, User Experience, Visual Design, Project Management,Team Leading',
  },
  {
    id: uuid(),
    class: 'vertical-timeline-element--work',
    backgroundColor: subBackgroundColor,
    date: 'Jan - Apr 2018',
    icon: <Work />,
    mainHeading: 'Web Developer Intern',
    subHeading: 'StoryStock (Startup)',
    description:
      'Creative Direction, User Experience, Visual Design, Project Management,Team Leading',
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
      <Typography variant="body2">{experience.description}</Typography>
    </VerticalTimelineElement>
  ));
}

function Timeline() {
  return (
    <>
      <VerticalTimeline className="vertical-timeline-custom-line">
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
