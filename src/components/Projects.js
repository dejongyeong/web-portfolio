import { Box, makeStyles, Tab, Tabs, useMediaQuery } from '@material-ui/core';
import React, { Fragment } from 'react';

import { publications } from '../data/Articles';
import Publications from './Publications';

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
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
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
          <Publications publications={publications} />
        </TabPanel>
      </div>
    </div>
  );
}

export default Projects;
