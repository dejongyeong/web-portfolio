import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faOrcid,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import uuid from 'react-uuid';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
    },
    margin: '2% auto',
    width: 'auto',
    [theme.breakpoints.down('md')]: {
      margin: '3% auto 5% auto',
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '6% auto 10% auto',
    },
    '& .linkedin:hover': {
      '& a': {
        color: '#ffffff',
      },
      backgroundColor: '#0e76ab',
    },
    '& .github:hover': {
      '& a': {
        color: '#ffffff',
      },
      backgroundColor: '#000000',
    },
    '& .orcid:hover': {
      '& a': {
        color: '#ffffff',
      },
      backgroundColor: '#a6ce39',
    },
    '& .gmail:hover': {
      '& a': {
        color: '#ffffff',
      },
      backgroundColor: '#b23121',
    },
  },
  aboutIcons: {
    width: '30px',
    paddingBottom: '30px',
    borderRadius: '0%',
    position: 'relative',
    backgroundColor: 'rgba(0, 173, 181, 0.05)',
  },
  iconsContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    '& a': {
      color: '#222831',
      padding: '0',
      margin: '0',
    },
  },
}));

function ContactButton() {
  const classes = useStyles();
  const contacts = [
    {
      key: uuid(),
      links: 'https://github.com/dejongyeong',
      icons: faGithub,
      style: 'github',
    },
    {
      key: uuid(),
      links: 'https://www.linkedin.com/in/de-jong-yeong/',
      icons: faLinkedinIn,
      style: 'linkedin',
    },
    {
      key: uuid(),
      links: 'https://orcid.org/0000-0002-4626-8040',
      icons: faOrcid,
      style: 'orcid',
    },
    {
      key: uuid(),
      links: 'mailto: de.jong.yeong@gmail.com',
      icons: faEnvelope,
      style: 'gmail',
    },
  ];

  return (
    <div className={classes.wrapper}>
      <div>
        <Grid container justify="center" alignItems="center" spacing={3}>
          {contacts.map((contact) => (
            <Grid item key={contact.key}>
              <div className={`${classes.aboutIcons} ${contact.style}`}>
                <div className={classes.iconsContent}>
                  <a
                    href={contact.links}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={contact.icons} size="lg" />
                  </a>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default ContactButton;
