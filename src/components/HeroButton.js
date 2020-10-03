import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, Button, Grid } from '@material-ui/core';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const resumeLink = 'https://github.com/dejongyeong';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    '& a': {
      textDecoration: 'none',
    },
  },
}));

const StyledButton = withStyles({
  root: {
    backgroundColor: 'transparent',
    width: '200px',
    borderRadius: '30px',
    boxSizing: 'border-box',
    fontFamily: 'Montserrat, sans-serif',
    border: '2px solid #2E585B',
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: '0.08em',
    color: '#222831',
    '&:hover': {
      backgroundColor: '#2e585d',
      borderColor: '#2e585d',
      color: '#ffffff',
    },
    transition: 'background-color 0.5s ease-in-out',
    WebkitTransition: 'background-color 0.5s ease-in-out',
    MozTransition: 'background-color 0.5s ease-in-out',
  },
})(Button);

function HeroButton(props) {
  const styles = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={styles.wrapper}>
      <Grid
        container
        justify="center"
        spacing={2}
        alignItems="center"
        direction="row"
      >
        <Grid item xs={12} lg={6}>
          <AnchorLink
            href="#portfolio"
            onClick={preventDefault}
            offset={() => 90}
          >
            <StyledButton>{props.profile}</StyledButton>
          </AnchorLink>
        </Grid>
        <Grid item xs={12} lg={6}>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <StyledButton>{props.contact}</StyledButton>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

HeroButton.propTypes = {
  profile: PropTypes.string,
  contact: PropTypes.string,
};

export default HeroButton;
