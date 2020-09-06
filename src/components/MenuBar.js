import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useScrollTrigger,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

import MenuItems from './MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
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
    [theme.breakpoints.up('md')]: {
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

function MenuBar(props) {
  const classes = useStyles();

  return (
    <div id="menu-bar">
      <MenuTransparentScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              DJ
            </Typography>
            <MenuItems />
            <div className={classes.sectionMobile}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </MenuTransparentScroll>
    </div>
  );
}

export default MenuBar;
