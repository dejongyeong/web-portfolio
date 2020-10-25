import {
  makeStyles,
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
  Box,
} from '@material-ui/core';
import React from 'react';

import { publications } from '../data/Articles';
import { sideProjects } from '../data/SideProjects';
import Publications from './Publications';
import Projects from './Projects';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    background: '#ffffff',
    height: '100%',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    height: '100%',
    margin: '4% auto',
    [theme.breakpoints.down('lg')]: {
      margin: '6% auto 8% auto',
    },
  },
  title: {
    textAlign: 'center',
    '& h3': {
      color: '#2e585d',
      fontWeight: '700',
      letterSpacing: '2px',
      fontFamily: 'Montserrat, sans-serif',
      textTransform: 'uppercase',
      '& span': {
        color: '#393e46',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.3rem',
      },
    },
    '& p': {
      color: '#00adb5',
      fontFamily: 'Lato, sans-serif',
      textTransform: 'lowercase',
      fontWeight: '400',
    },
  },
  projects: {
    width: '100%',
    margin: '3.5rem auto 0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '4% auto 0 auto',
    },
  },
  works: {
    maxWidth: '100%',
    height: '70vh',
    maxHeight: '70vh',
    [theme.breakpoints.up('768')]: {
      display: 'flex',
      flexGrow: '1',
    },
    overflowY: 'auto',
    msOverflowStyle: '-ms-autohiding-scrollbar',
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
    '& .MuiAccordionSummary-expandIconWrapper': {
      marginLeft: '1rem',
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

function Portfolio() {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('768'));

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>
          <Typography variant="h3">Works</Typography>
          <Typography variant="body1">more coming soon</Typography>
        </div>
        <div className={classes.projects}>
          <div className={`${classes.works} no-scroll-bar`}>
            <React.Fragment>
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
            </React.Fragment>
            <div className={`${classes.items}`}>
              <TabPanel value={value} index={0} isSmallScreen={isSmallScreen}>
                <Projects projects={sideProjects} />
              </TabPanel>
              <TabPanel value={value} index={1} isSmallScreen={isSmallScreen}>
                <Publications publications={publications} />
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
