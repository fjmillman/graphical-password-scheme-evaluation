import React from 'react';
import * as PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import toggleIcon from '../store/updaters/toggleIcon';
import getToggle from '../store/selectors/getToggle';

const styles = () => ({
  icon: {
    fontSize: 48,
    color: 'rgb(0, 0, 0)',
  },
  activeIcon: {
    background: 'rgba(0, 0, 0, 0.25)',
  },
  inactiveIcon: {
    background: 'rgba(0, 0, 0, 0)',
  },
  passIcon: {
    background: 'rgba(0, 0, 255, 0.25)',
  },
  flagIcon: {
    background: 'rgba(255, 0, 0, 0.25)',
  },
  skipIcon: {
    background: 'rgba(0, 255, 0, 0.25)',
  },
});

const PassIcon = ({ classes, passIcon }) => (
  <IconButton
    onClick={() => toggleIcon(passIcon)}
    className={
      !getToggle(passIcon)
        ? classes.inactiveIcon
        : getToggle(passIcon) === 'pass'
        ? classes.passIcon
        : getToggle(passIcon) === 'flag'
        ? classes.flagIcon
        : getToggle(passIcon) === 'skip'
        ? classes.skipIcon
        : classes.activeIcon
    }
  >
    <Icon className={classes.icon}>{passIcon}</Icon>
  </IconButton>
);

PassIcon.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  passIcon: PropTypes.string.isRequired,
};

export default withStyles(styles)(view(PassIcon));
