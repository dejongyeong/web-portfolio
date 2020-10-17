import {
  Box,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import React, { Fragment } from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    height: '70vh',
    maxHeight: '70vh',
    [theme.breakpoints.up('768')]: {
      display: 'flex',
      flexGrow: '1',
    },
  },
  tabs: {
    [theme.breakpoints.up('768')]: {
      width: '200px',
      maxWidth: '200px',
      borderRight: `1px solid ${theme.palette.divider}`,
      '& button > span': {
        color: '#2e585b',
        fontWeight: '600',
        alignItems: 'flex-start !important',
        justifyContent: 'flex-start !important',
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
    overflowY: 'auto',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
    <div className={classes.root}>
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
      <div className={`${classes.items} no-scroll-bar`}>
        <TabPanel value={value} index={0} isSmallScreen={isSmallScreen}>
          Item One <br />
          <Button>sdsds</Button> <br />
          Item One <br />
          Item One <br />
          Item One <br />
          Item One <br />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>
  );
}

export default Projects;
