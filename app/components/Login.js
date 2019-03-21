import React from 'react';
import * as PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import login from '../store/updaters/login';
import getPassIcons from '../store/selectors/getPassIcons';
import PassIconSelect from './PassIconSelect';
import PassIconDragAndDrop from './PassIconDragAndDrop';
import getCurrentStage from '../store/selectors/getCurrentStage';

const styles = theme => ({
  text: {
    margin: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 5,
    float: 'right',
    clear: 'both',
  },
});

const Login = ({ classes, scheme }) => (
  <React.Fragment>
    <Typography component="h3" variant="h5" className={classes.text}>
      Log in
    </Typography>
    <Typography component="p" align="center" className={classes.text}>
      Stage {getCurrentStage()} of 3
    </Typography>
    {scheme === 1 ? (
      <PassIconSelect passIcons={getPassIcons()} />
    ) : (
      <PassIconDragAndDrop passIcons={getPassIcons()} />
    )}
    <Button variant="contained" className={classes.button} onClick={login}>
      <Typography variant="subtitle1" color="primary">
        Login
      </Typography>
    </Button>
  </React.Fragment>
);

Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  scheme: PropTypes.number.isRequired,
};

export default withStyles(styles)(view(Login));
