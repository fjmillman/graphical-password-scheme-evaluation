import React from 'react';
import * as PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import getIsRegistration from '../store/selectors/getIsRegistration';
import PassIcon from './PassIcon';

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  registrationGridList: {
    width: 250,
    height: 550,
  },
  loginGridList: {
    width: 250,
    height: 350,
  },
});

const PassIconSelect = ({ classes, passIcons }) => {
  const passIconGrid = passIcons.map(passIcon => (
    <GridListTile key={passIcon}>
      <PassIcon passIcon={passIcon} />
    </GridListTile>
  ));

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={75}
        className={
          getIsRegistration()
            ? classes.registrationGridList
            : classes.loginGridList
        }
        cols={3}
      >
        {passIconGrid}
      </GridList>
    </div>
  );
};

PassIconSelect.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  passIcons: PropTypes.arrayOf(PropTypes.string),
};

export default withStyles(styles)(view(PassIconSelect));
