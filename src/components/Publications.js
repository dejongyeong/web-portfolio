import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  makeStyles,
  withStyles,
} from '@material-ui/core';
import { ExpandMore, Info, Link } from '@material-ui/icons';
import React from 'react';

const useStyle = makeStyles((theme) => ({
  content: {
    padding: '0 .6rem',
    lineHeight: '1.7rem',
    fontFamily: 'Lato, sans-serif',
    fontSize: '.95rem',
    color: '#222831',
    width: '100%',
    maxWidth: '100%',
    '& span': {
      fontWeight: 'bold',
    },
  },
  header: {
    marginBottom: '.5rem',
    display: 'flex',
  },
  authors: {
    flexGrow: '1',
    marginRight: '3%',
  },
  abstract: {
    marginTop: '1rem',
  },
  date: {
    fontWeight: 'bolder',
    color: '#00adb5',
    flexGrow: '0',
  },
  status: {
    marginTop: '1.2rem',
  },
  summaryDetails: {
    padding: '.4rem',
    marginBottom: '.8rem',
  },
}));

const CustomAccordion = withStyles({
  root: {
    boxShadow: 'none',
    marginBottom: '1rem',
  },
  expanded: {},
})(Accordion);

const CustomAccordionSummary = withStyles({
  root: {
    backgroundColor: '#2e585b',
    color: '#ffffff',
    marginBottom: '0.5rem',
    cursor: 'pointer',
    borderRadius: '0.3rem',
    outline: 'none',
    fontWeight: '500',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9rem',
    '&:hover': {
      backgroundColor: '#336366',
    },
    '& svg': {
      color: '#ffffff',
    },
  },
})(AccordionSummary);

const CustomChip = withStyles({
  root: {
    backgroundColor: '#222831',
  },
  label: {
    fontWeight: '300 !important',
    fontSize: '.8rem',
    fontStyle: 'Montserrat, sans-serif',
  },
  clickable: {
    backgroundColor: '#2e585b',
    '&:hover': {
      backgroundColor: '#00adb5',
    },
  },
})(Chip);

function Publications(props) {
  const classes = useStyle();
  const [expanded, setExpanded] = React.useState('null');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return props.publications.map((publication, index) => (
    <CustomAccordion
      key={publication.key}
      expanded={expanded === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
      TransitionProps={{ unmountOnExit: true }}
    >
      <CustomAccordionSummary
        expandIcon={<ExpandMore />}
        aria-label="Expand"
        aria-controls={`additional-actions${index}-content`}
        id={`additional-actions${index}-header`}
      >
        {publication.title}
      </CustomAccordionSummary>
      <AccordionDetails className={classes.summaryDetails}>
        <div className={classes.content}>
          <div className={classes.header}>
            <div className={classes.authors}>
              <span>Author:</span> {publication.author} <br />
              <span>Co-Author:</span> {publication.coAuthor} <br />
              <span>{publication.type === 'conference' ? 'Conference:' : 'Journal:'}</span> {publication.conference} <br />
              <span>Location:</span> {publication.location} <br />
              <div className={classes.abstract}>
                <span>Abstract: </span> {publication.abstract}
              </div>
            </div>
            <div className={classes.date}>{publication.date}</div>
          </div>
          <div className={classes.status}>
            <Chip
              label={publication.status}
              color="primary"
              variant="outlined"
              style={{
                marginRight: '.7rem',
                color: '#00adb6',
                borderColor: '#00adb5',
              }}
              icon={<Info />}
            />
            {publication.links === null ? (
              <CustomChip
                label="Article"
                component="a"
                href={publication.links}
                clickable
                color="primary"
                disabled
              />
            ) : (
              <CustomChip
                icon={<Link />}
                label="Article"
                component="a"
                href={publication.links}
                clickable
                color="primary"
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
          </div>
        </div>
      </AccordionDetails>
    </CustomAccordion>
  ));
}

export default Publications;
