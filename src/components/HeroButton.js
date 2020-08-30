import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '3%',
    [theme.breakpoints.down('1024')]: {
      justifyContent: 'center',
      marginTop: '4%',
    },
    fontSize: '0.73rem',
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.1rem',
    },
  },
}));

const StyledButton = withStyles({
  root: {
    backgroundColor: 'transparent',
    marginRight: '2%',
    width: '200px',
    borderRadius: '50px',
    boxSizing: 'border-box',
    fontFamily: 'Montserrat',
    border: '2px solid #2E585B',
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: '0.08em',
    color: '#2e2e2e',
    '&:hover': {
      backgroundColor: '#2e585d',
      borderColor: '#2e585d',
      color: '#ffffff',
      boxShadow: '5px 5px 1px 0.15rem rgba(57, 62, 70, 0.1)',
    },
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
