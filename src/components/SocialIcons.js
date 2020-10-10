import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faOrcid,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { makeStyles, Grid } from '@material-ui/core';

const links = [
  'https://github.com/dejongyeong',
  'https://orcid.org/0000-0002-4626-8040',
  'https://www.linkedin.com/in/de-jong-yeong/',
];
const linksIcon = [faGithubSquare, faOrcid, faLinkedin];
const classes = ['github', 'orcid', 'linkedin'];

const useStyles = makeStyles((theme) => ({
  social: {
    textAlign: 'center',
    '& a': {
      color: '#222831',
    },
    '& .github > a:hover': {
      color: '#000000',
    },
    '& .linkedin > a:hover': {
      color: '#0e76ab',
    },
    '& .orcid > a:hover': {
      color: '#a6ce39',
    },
  },
}));

export default function SocialIcons() {
  const styles = useStyles();

  return (
    <div className={styles.social}>
      <Grid
        container
        justify="center"
        spacing={3}
        alignItems="center"
        direction="row"
      >
        {links.map((text, index) => (
          // key is required for react!!
          <Grid item xs={4} key={text} className={classes[index]}>
            <a href={text} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={linksIcon[index]} size="lg" swapOpacity />
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
