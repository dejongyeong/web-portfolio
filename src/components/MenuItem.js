import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import PDF from '../static/resume.pdf';

// tutorial: https://codepen.io/brunob182/pen/rWxYmW
// initially tried react useStyle hook, but failed. Styled components as alternative
const MenuItems = styled.div`
  a {
    text-decoration: none;
    color: #2e585d;
    position: relative;
    transition: color 0.2s ease;
    display: inline-block;

    :hover {
      color: #222831;
      ::after,
      ::before {
        width: 100%;
        left: 0;
      }
    }
    ::after,
    ::before {
      content: '';
      position: absolute;
      top: calc(100% + 3px);
      width: 0;
      right: 0;
      height: 2px;
    }
    ::before {
      transition: width 0.4s cubic-bezier(0.51, 0.18, 0, 0.88) 0.1s;
      background: #00adb5;
    }
    ::after {
      transition: width 0.2s cubic-bezier(0.29, 0.18, 0.26, 0.83);
      background: #2e585d;
    }
  }
  h6 {
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
  margin-left: 3%;
`;

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    flexGrow: 1,
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },
}));

function MenuItem(props) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  // rel='noopener' - security reason, prevent redirect page to malicious url and ensures running in separate process
  return (
    <div className={classes.sectionDesktop}>
      {props.menus.map((menu) => (
        // key is required for react!!
        // anchor link not usable for external link
        // package: https://github.com/mauricevancooten/react-anchor-link-smooth-scroll#readme
        <MenuItems key={menu.text}>
          <AnchorLink
            href={menu.link}
            onClick={preventDefault}
            offset={() => 90}
          >
            <Typography variant="h6">{menu.text}</Typography>
          </AnchorLink>
        </MenuItems>
      ))}
      <MenuItems>
        <a href={PDF} target="_blank" rel="noopener noreferrer">
          <Typography variant="h6">Résumé</Typography>
        </a>
      </MenuItems>
    </div>
  );
}

export default MenuItem;
