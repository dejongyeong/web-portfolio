import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import { Inbox, Mail, Menu, Close } from '@material-ui/icons';
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
  },
  closeSection: {
    textAlign: 'right',
  },
  paper: {
    backgroundColor: '#eeeeee',
  },
}));

const anchor = 'right';
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function MobileMenu() {
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

  //TODO: Refine here
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
      <Divider />
      <List className={classes.items}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {/* <ListItem button>
          <AnchorLink href="#contact">
            <ListItemText variant="h6">Contact</ListItemText>
          </AnchorLink>
        </ListItem> */}
      </List>
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
          variant="persistent"
        >
          {mobileMenu}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
