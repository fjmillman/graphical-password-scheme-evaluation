import React from 'react';
import * as PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PassIconSelect from './PassIconSelect';
import getPassIcons from '../store/selectors/getPassIcons';
import guess from '../store/updaters/guess';

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

const Guess = ({ classes }) => (
  <React.Fragment>
    <Typography component="h3" variant="h5" className={classes.text}>
      Guess
    </Typography>
    <Typography component="p" align="center" className={classes.text}>
      You now need to guess as many of the 6 pass objects you believe were
      selected during the registration phase as possible based on your previous
      observations.
    </Typography>
    <PassIconSelect passIcons={getPassIcons()} />
    <Button variant="contained" className={classes.button} onClick={guess}>
      <Typography variant="subtitle1" color="primary">
        Submit
      </Typography>
    </Button>
  </React.Fragment>
);

Guess.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(view(Guess));
