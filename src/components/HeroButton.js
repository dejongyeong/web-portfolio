import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      '& button:nth-child(2)': {
        marginTop: '3%',
      },
    },
  },
}));

const StyledButton = withStyles({
  root: {
    backgroundColor: 'transparent',
    marginRight: '3%',
    width: '200px',
    borderRadius: '0',
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
      boxShadow: '2px 2px 1px 0.2rem rgba(57, 62, 70, 0.1)',
    },
    transition: 'background-color 0.5s ease-in-out',
    WebkitTransition: 'background-color 0.5s ease-in-out',
    MozTransition: 'background-color 0.5s ease-in-out',
  },
})(Button);

function HeroButton(props) {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <StyledButton>{props.profile}</StyledButton>
      <StyledButton>{props.contact}</StyledButton>
    </div>
  );
}

HeroButton.propTypes = {
  profile: PropTypes.string,
  contact: PropTypes.string,
};

export default HeroButton;
