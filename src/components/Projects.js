import {
  Box,
  Chip,
  makeStyles,
  Tab,
  Tabs,
  useMediaQuery,
  withStyles,
} from '@material-ui/core';
import { Info, Link } from '@material-ui/icons';
import React, { Fragment } from 'react';

import { publications } from '../data/Publications';

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    height: '70vh',
    maxHeight: '70vh',
    [theme.breakpoints.up('768')]: {
      display: 'flex',
      flexGrow: '1',
    },
    overflowY: 'auto',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  },
  tabs: {
    [theme.breakpoints.up('768')]: {
      width: '230px',
      maxWidth: '230px',
      borderRight: `1px solid ${theme.palette.divider}`,
      '& button > span': {
        color: '#2e585b',
        fontWeight: '600',
        alignItems: 'flex-start !important',
        justifyContent: 'flex-start !important',
        fontSize: '.85rem',
      },
    },
    [theme.breakpoints.down('lg')]: {
      backgroundColor: 'transparent',
      '& button': {
        fontWeight: '600',
        color: '#2e585b',
        fontFamily: 'Montserrat, sans-serif',
      },
    },
  },
  items: {
    width: '100%',
    '& details': {
      marginBottom: '1.15rem',
    },
    '& summary': {
      padding: '.85rem',
      backgroundColor: '#2e585b',
      color: '#ffffff',
      marginBottom: '0.5rem',
      cursor: 'pointer',
      borderRadius: '0.3rem',
      outline: 'none',
      fontWeight: '500',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '0.9rem',
      transition: 'background-color 0.4s',
      '&:hover': {
        backgroundColor: '#336366',
      },
    },
  },
  content: {
    padding: '0 .6rem',
    lineHeight: '1.7rem',
    fontFamily: 'Lato, sans-serif',
    fontSize: '.95rem',
    color: '#222831',
    '& span': {
      fontWeight: 'bold',
    },
  },
  header: {
    marginBottom: '.5rem',
  },
  authors: {
    flexGrow: '1',
    marginRight: '5%',
  },
  date: {
    fontWeight: 'bolder',
    color: '#00adb5',
  },
  status: {
    marginTop: '1.5rem',
  },
}));

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

function a11yProps(index, isSmallScreen) {
  return {
    id: isSmallScreen ? `full-width-tab-${index}` : `vertical-tab-${index}`,
    'aria-controls': isSmallScreen
      ? `full-width-tabpanel-${index}`
      : `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, isSmallScreen, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={
        isSmallScreen ? `full-width-tabpanel-${index}` : `vertical-tab-${index}`
      }
      aria-labelledby={
        isSmallScreen ? `full-width-tab-${index}` : `vertical-tabpanel-${index}`
      }
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  );
}

function handleClick(event) {
  const details = document.querySelectorAll('details'); // Fetch all the details element.
  details.forEach((detail) => {
    if (detail !== this) {
      // if not current view
      console.log(this);
      detail.removeAttribute('open');
    }
  });
}

function Publications() {
  const classes = useStyle();

  return publications.map((publication) => (
    <details key={publication.key} onClick={handleClick}>
      <summary>{publication.title}</summary>
      <div className={classes.content}>
        <div className={classes.header} style={{ display: 'flex' }}>
          <div className={classes.authors}>
            <span>Author:</span> {publication.author} <br />
            <span>Co-Author:</span> {publication.coAuthor} <br />
            <span>Conference:</span> {publication.conference} <br />
            <span>Location:</span> {publication.location} <br />
          </div>
          <div className={classes.date} style={{ flexGrow: '0' }}>
            2020
          </div>
        </div>
        <div className={classes.abstract}>
          <span>Abstract: </span>
          {publication.abstract}
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
          {publication.link === null ? (
            <Fragment>
              <CustomChip
                label="Article"
                component="a"
                href={publication.link}
                clickable
                color="primary"
                disabled
              />
            </Fragment>
          ) : (
            <Fragment>
              <CustomChip
                icon={<Link />}
                label="Article"
                component="a"
                href={publication.link}
                clickable
                color="primary"
                target="_blank"
                rel="noopener noreferrer"
              />
            </Fragment>
          )}
        </div>
      </div>
    </details>
  ));
}

function Projects() {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('768'));

  return (
    <div className={`${classes.root} no-scroll-bar`}>
      <Fragment>
        <Tabs
          orientation={isSmallScreen ? 'horizontal' : 'vertical'}
          variant={isSmallScreen ? 'fullWidth' : 'scrollable'}
          value={value}
          onChange={handleChange}
          aria-label={isSmallScreen ? 'horizontal tabs' : 'vertical tabs'}
          className={classes.tabs}
          selectionFollowsFocus
          TabIndicatorProps={{ style: { background: '#00adb5' } }}
        >
          <Tab label="Projects" {...a11yProps(0, isSmallScreen)} />
          <Tab label="Publications" {...a11yProps(1, isSmallScreen)} />
        </Tabs>
      </Fragment>
      <div className={`${classes.items}`}>
        <TabPanel value={value} index={0} isSmallScreen={isSmallScreen}>
          Tab 1
        </TabPanel>
        <TabPanel value={value} index={1} isSmallScreen={isSmallScreen}>
          <Publications />
        </TabPanel>
      </div>
    </div>
  );
}

export default Projects;
