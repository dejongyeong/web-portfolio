import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faOrcid,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  social: {
    textAlign: 'center',
    '& a': {
      color: '#2e585b',
    },
    '& a:hover': {
      color: '#00adb5',
    },
  },
}));

export default function SocialIcons() {
  const styles = useStyles();

  return (
    <div className={styles.social}>
      <Grid container justify="center" spacing={3} alignItems="center">
        <Grid item xs={3}>
          <a href="https://github.com/dejongyeong" target="blank">
            <FontAwesomeIcon icon={faGithubSquare} size="lg" swapOpacity />
          </a>
        </Grid>
        <Grid item xs={3}>
          <a href="https://www.linkedin.com/in/de-jong-yeong/" target="blank">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </Grid>
        <Grid item xs={3}>
          <a href="https://orcid.org/0000-0002-4626-8040" target="blank">
            <FontAwesomeIcon icon={faOrcid} size="lg" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
