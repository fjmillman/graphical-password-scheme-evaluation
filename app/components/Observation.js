import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import getObservation from '../store/selectors/getObservation';
import completeObservation from '../store/updaters/completeObservation';

const styles = theme => ({
  text: {
    margin: theme.spacing.unit * 3,
  },
  video: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3,
    float: 'right',
    clear: 'both',
  },
});

const Observation = ({ classes, url }) => (
  <>
    <Typography component="h3" variant="h5" className={classes.text}>
      Observation{' '}
      <Typography inline component="h3" variant="h6">
        | Attempt {getObservation() + 1} of 3
      </Typography>
    </Typography>
    <Typography component="p" align="center" className={classes.text}>
      {getObservation() === 0
        ? 'You will now take the role of an over-the-shoulder attacker and ' +
          'observe the researcher progressing through the stages of the login ' +
          'phase for some unknown password. Your goal is to try and determine ' +
          'which pass objects were selected during the registration phase.'
        : getObservation() === 1
        ? 'You must now observe the researcher attempting to login for a ' +
          'second time.'
        : 'You must now observe the researcher attempting to login for a ' +
          'third and final time.'}
    </Typography>
    <div className={classes.video}>
      <YouTubePlayer
        className={classes.reactPlayer}
        url={url}
        width="100%"
        height="600px"
        controls
        muted
      />
    </div>
    <Button
      variant="contained"
      className={classes.button}
      onClick={completeObservation}
    >
      <Typography variant="subtitle1" color="primary">
        Continue
      </Typography>
    </Button>
  </>
);

Observation.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  url: PropTypes.string.isRequired,
};

export default withStyles(styles)(Observation);
