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

const useStyles = makeStyles((theme) => ({
  social: {
    textAlign: 'center',
    '& a': {
      color: '#222831',
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
      <Grid
        container
        justify="center"
        spacing={3}
        alignItems="center"
        direction="row"
      >
        {links.map((text, index) => (
          // key is required for react!!
          <Grid item xs={4} key={text}>
            <a href={text} target="blank">
              <FontAwesomeIcon icon={linksIcon[index]} size="lg" swapOpacity />
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
