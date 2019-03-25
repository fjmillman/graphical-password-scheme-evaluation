import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
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
      You will now take the role of an over-the-shoulder attacker and observe
      the researcher progressing through the stages of the login phase for some
      unknown password. Your goal is to try and determine which pass objects
      were selected during the registration phase.
    </Typography>
    <div className={classes.video}>
      <YouTubePlayer
        className={classes.reactPlayer}
        url={url}
        onEnded={completeObservation}
        width="100%"
        height="600px"
        controls
        muted
      />
    </div>
  </>
);

Observation.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  url: PropTypes.string.isRequired,
};

export default withStyles(styles)(Observation);
