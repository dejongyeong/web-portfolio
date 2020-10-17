import { Box, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    height: '70vh',
    maxHeight: '70vh',
    margin: '0',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  tab: {
    backgroundColor: '#eeeeee',
    '& button': {
      fontWeight: '700',
      color: '#2e585b',
      fontFamily: 'Montserrat, sans-serif',
    },
  },
}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function ProjectsMobile() {
  const classes = useStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        variant="fullWidth"
        aria-label="mobile version tabs"
        onChange={handleChange}
        className={classes.tab}
        selectionFollowsFocus
        indicatorColor="secondary"
      >
        <Tab label="Projects" {...a11yProps(0)} />
        <Tab label="Publications" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}

export default ProjectsMobile;
