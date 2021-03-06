import React from 'react';
import * as PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PassIconSelect from './PassIconSelect';
import getPassIcons from '../store/selectors/getPassIcons';
import guess from '../store/updaters/guess';
import getGuess from '../store/selectors/getGuess';

const styles = theme => ({
  text: {
    margin: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3,
    float: 'right',
    clear: 'both',
  },
});

const Guess = ({ classes }) => (
  <>
    <Typography component="h3" variant="h5" className={classes.text}>
      Guess{' '}
      <Typography inline component="h3" variant="h6">
        | Attempt {getGuess() + 1} of 2
      </Typography>
    </Typography>
    <Typography component="p" align="center" className={classes.text}>
      You need to make an educated guess on as many of the 6 pass objects you
      believe were selected during the registration phase as possible based on
      your previous observation.
    </Typography>
    <PassIconSelect passIcons={getPassIcons()} />
    <Button variant="contained" className={classes.button} onClick={guess}>
      <Typography variant="subtitle1" color="primary">
        Submit
      </Typography>
    </Button>
  </>
);

Guess.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(view(Guess));
