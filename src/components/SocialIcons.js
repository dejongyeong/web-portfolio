import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faOrcid,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { makeStyles, Grid } from '@material-ui/core';

// assume both medias and mediasIcon are in same order - could this be modify as a map??
const medias = [
  'https://github.com/dejongyeong',
  'https://www.linkedin.com/in/de-jong-yeong/',
  'https://orcid.org/0000-0002-4626-8040',
];
const mediasIcon = [faGithubSquare, faLinkedin, faOrcid];

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
        {medias.map((text, index) => (
          <Grid item xs={3}>
            <a href={text} target="blank">
              <FontAwesomeIcon icon={mediasIcon[index]} size="lg" swapOpacity />
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
