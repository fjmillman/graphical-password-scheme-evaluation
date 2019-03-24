import React from 'react';
import * as PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import register from '../store/updaters/register';
import getPassIcons from '../store/selectors/getPassIcons';
import PassIconSelect from './PassIconSelect';

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
  passIcon: {
    fontSize: 10,
    color: 'rgba(0, 0, 255, 0.5)',
  },
  flagIcon: {
    fontSize: 10,
    color: 'rgba(255, 0, 0, 0.5)',
  },
  skipIcon: {
    fontSize: 10,
    color: 'rgba(0, 255, 0, 0.5)',
  },
});

const Register = ({ classes }) => (
  <React.Fragment>
    <Typography component="h3" variant="h5" className={classes.text}>
      Registration
    </Typography>
    <Typography component="p" align="center" className={classes.text}>
      Select <FiberManualRecord className={classes.passIcon} /> 6 pass objects,{' '}
      <FiberManualRecord className={classes.flagIcon} /> 3 flag objects, and{' '}
      <FiberManualRecord className={classes.skipIcon} /> 3 skip objects
    </Typography>
    <PassIconSelect passIcons={getPassIcons()} />
    <Button variant="contained" className={classes.button} onClick={register}>
      <Typography variant="subtitle1" color="primary">
        Register
      </Typography>
    </Button>
  </React.Fragment>
);

Register.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(view(Register));
