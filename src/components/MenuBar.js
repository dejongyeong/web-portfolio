import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import { Mail, Home, Folder, Timeline, Build } from '@material-ui/icons';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
    color: '#2e585b',
    textDecoration: 'none',
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
    { text: 'Portfolio', link: '#portfolio', icon: <Folder /> },
    { text: 'Skills', link: '#skills', icon: <Build /> },
    { text: 'Journey', link: '#experience', icon: <Timeline /> },
    { text: 'Contact', link: '#contact', icon: <Mail /> },
  ];

  const preventDefault = (event) => event.preventDefault();

  return (
    <div id="menu-bar">
      <MenuTransparentScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            <AnchorLink
              href="#home"
              onClick={preventDefault}
              offset={() => 0}
              className={classes.title}
            >
              <Typography variant="h6">DJ</Typography>
            </AnchorLink>

            <MenuItems menus={menus} />
            <div className={classes.sectionMobile}>
              <MobileMenu menus={menus} />
            </div>
          </Toolbar>
        </AppBar>
      </MenuTransparentScroll>
    </div>
  );
}

export default MenuBar;
