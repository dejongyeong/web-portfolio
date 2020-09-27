import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Star, School, Work } from '@material-ui/icons';

function Timeline(props) {
  return (
    <>
      <VerticalTimeline className="vertical-timeline-custom-line">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#2e585b', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid  #2e585b' }}
          date="2011 - present"
          dateClassName={props.styles.dateStyle}
          iconStyle={{ background: '#ffffff', color: '#00adb5' }}
          icon={<School />}
        >
          <h4 className="vertical-timeline-element-title">Creative Director</h4>
          <h5 className="vertical-timeline-element-subtitle">Miami, FL</h5>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#393e46', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid  #393e46' }}
          date="2010 - 2011"
          dateClassName={props.styles.dateStyle}
          iconStyle={{ background: '#ffffff', color: '#00adb5' }}
          icon={<Work />}
        >
          <h4 className="vertical-timeline-element-title">Art Director</h4>
          <h5 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h5>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#393e46', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid  #393e46' }}
          date="2008 - 2010"
          dateClassName={props.styles.dateStyle}
          iconStyle={{ background: '#ffffff', color: '#00adb5' }}
          icon={<School />}
        >
          <h4 className="vertical-timeline-element-title">Web Designer</h4>
          <h5 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h5>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#393e46', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '7px solid  #393e46' }}
          date="April 2013"
          dateClassName={props.styles.dateStyle}
          iconStyle={{ background: '#ffffff', color: '#00adb5' }}
          icon={<Work />}
        >
          <h4 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h4>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: '#ffffff', color: '#00adb5' }}
          icon={<Star />}
        />
      </VerticalTimeline>
    </>
  );
}

export default Timeline;
