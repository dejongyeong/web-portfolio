import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import { Menu, Close, ListAlt } from '@material-ui/icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// tutorial from material ui documentation
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    backgroundColor: '#eeeeee',
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  items: {
    backgroundColor: '#eeeeee',
    '& a': {
      color: '#2e585d',
      '& svg': {
        color: '#2e585d',
      },
      textDecoration: 'none',
      '&:hover': {
        color: '#00adb5',
        '& svg': {
          color: '#00adb5',
        },
      },
      transition: 'color 0.5s ease-in-out',
      WebkitTransition: 'color 0.5s ease-in-out',
      MozTransition: 'color 0.5s ease-in-out',
    },
  },
  closeSection: {
    textAlign: 'right',
  },
  paper: {
    backgroundColor: '#eeeeee',
    boxShadow: '1px 3px 20px #393e46',
  },
}));

const anchor = 'right';
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

//'Home', 'About', 'Work', 'Experience', 'Contact'

export default function MobileMenu(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ state, [anchor]: open });
  };

  const mobileMenuList = (
    <List className={classes.items}>
      {props.menus.map((menu) => (
        <AnchorLink href={menu.link} key={menu.text}>
          <ListItem button>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.text} />
          </ListItem>
        </AnchorLink>
      ))}
      <a href={props.resumeLink} target="blank">
        <ListItem button key="resume">
          <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
          <ListItemText primary="Résumé" />
        </ListItem>
      </a>
    </List>
  );

  const mobileMenu = (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.closeSection}>
        <IconButton
          style={{ color: '#2e585d' }}
          onClick={toggleDrawer(anchor, false)}
        >
          <Close />
        </IconButton>
      </div>
      {mobileMenuList}
    </div>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <IconButton
          edge="end"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(anchor, true)}
        >
          <Menu />
        </IconButton>
        <SwipeableDrawer
          classes={{ paper: classes.paper }}
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          //Error coming from material ui transition component
          //Issue of findDomNode deprecated in StrictMode: https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
          //Will not see this error in production, could remove variant or remove StrictMode in index.js if not required
          //variant="persistent"
        >
          {mobileMenu}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
