import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import getGuess from '../store/selectors/getGuess';
import getUrl from '../store/selectors/getUrl';
import nextPage from '../store/updaters/nextPage';

const styles = theme => ({
  text: {
    margin: theme.spacing.unit * 3,
  },
  video: {
    margin: theme.spacing.unit,
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

const Observation = ({ classes }) => {
  const FirstObservation = () => (
    <>
      <Typography component="p" align="center" className={classes.text}>
        You will now take the role of an over-the-shoulder attacker where you
        have obtained a single observed recording of the researcher logging in
        with some unknown password. Your goal is to determine the pass objects
        the researcher selected during the registration phase. You may watch
        this video as many times as you need and you may use a pen and paper to
        help you in your goal.
      </Typography>
      <div className={classes.video}>
        <YouTubePlayer
          url={getUrl(1)}
          width="100%"
          height="600px"
          controls
          muted
        />
      </div>
    </>
  );

  const SecondObservation = () => (
    <>
      <Typography component="p" align="center" className={classes.text}>
        You have now obtained a further two observed recordings of the
        researcher logging in with some unknown password each with a random
        configuration of objects and stages. Your goal is to determine the pass
        objects the researcher selected during the registration phase. You may
        watch all three of these video as many times as you need and you may use
        a pen and paper to help you in your goal.
      </Typography>
      <div className={classes.video}>
        <YouTubePlayer
          url={getUrl(1)}
          width="100%"
          height="600px"
          controls
          muted
        />
      </div>
      <div className={classes.video}>
        <YouTubePlayer
          url={getUrl(2)}
          width="100%"
          height="600px"
          controls
          muted
        />
      </div>
      <div className={classes.video}>
        <YouTubePlayer
          url={getUrl(3)}
          width="100%"
          height="600px"
          controls
          muted
        />
      </div>
    </>
  );

  return (
    <>
      <Typography component="h3" variant="h5" className={classes.text}>
        Observation{' '}
        <Typography inline component="h3" variant="h6">
          | Attempt {getGuess() + 1} of 2
        </Typography>
      </Typography>
      {getGuess() === 0 ? <FirstObservation /> : <SecondObservation />}
      <Button variant="contained" className={classes.button} onClick={nextPage}>
        <Typography variant="subtitle1" color="primary">
          Continue
        </Typography>
      </Button>
    </>
  );
};

Observation.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(Observation);
