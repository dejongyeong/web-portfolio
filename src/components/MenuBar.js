import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { Mail, Home, Info, Folder, Timeline } from '@material-ui/icons';
import PropTypes from 'prop-types';

import MenuItems from './MenuItem';
import MobileMenu from './MobileMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 0,
    letterSpacing: '0.15rem',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '400',
    marginLeft: theme.spacing(2),
    fontSize: '1.4rem',
  },
  sectionMobile: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1,
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}));

// From Material UI Document: https://material-ui.com/components/app-bar/
function MenuTransparentScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? 'rgb(182 211 213)' : 'transparent',
      color: '#2e585d',
      transition: trigger ? '0.3s' : '0.5s',
      boxShadow: trigger ? '1px 3px 20px #393e46' : 'none',
      padding: '3px 0px',
    },
  });
}
MenuTransparentScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

// hash link from: https://github.com/rafgraph/react-router-hash-link.git
function MenuBar(props) {
  const classes = useStyles();

  const menus = [
    { text: 'Home', link: '#home', icon: <Home /> },
    { text: 'About', link: '#about', icon: <Info /> },
    { text: 'Portfolio', link: '#portfolio', icon: <Folder /> },
    { text: 'Experience', link: '#experience', icon: <Timeline /> },
    { text: 'Contact', link: '#contact', icon: <Mail /> },
  ];
  const resumeLink = 'https://github.com/dejongyeong';

  return (
    <div id="menu-bar">
      <MenuTransparentScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              DJ
            </Typography>
            <MenuItems menus={menus} resumeLink={resumeLink} />
            <div className={classes.sectionMobile}>
              <MobileMenu menus={menus} resumeLink={resumeLink} />
            </div>
          </Toolbar>
        </AppBar>
      </MenuTransparentScroll>
    </div>
  );
}

export default MenuBar;
