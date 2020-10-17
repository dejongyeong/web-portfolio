import {
  Box,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';
import React, { Fragment } from 'react';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexGrow: '1',
      height: '65vh',
    },
  },
  tabs: {
    width: '200px',
    maxWidth: '200px',
    borderRight: `1px solid ${theme.palette.divider}`,
    '& button > span': {
      fontWeight: '500',
      alignItems: 'flex-start !important',
      justifyContent: 'flex-start !important',
    },
  },
  items: {
    width: '100%',
    border: '1px solid black',
    overflowY: 'auto',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  },
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

  return (
    <div className={classes.root}>
      <Fragment>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          textColor="secondary"
        >
          <Tab label="Projects" {...a11yProps(0)} />
          <Tab label="Publications" {...a11yProps(1)} />
        </Tabs>
      </Fragment>
      <div className={`${classes.items} no-scroll-bar`}>
        <TabPanel value={value} index={0}>
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
