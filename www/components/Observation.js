import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import nextPage from '../store/updaters/nextPage';

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
  <React.Fragment>
    <Typography component="h3" variant="h5" className={classes.text}>
      Observation
    </Typography>
    <Typography component="p" align="center" className={classes.text}>
      Watch the following video
    </Typography>
    <div className={classes.video}>
      <YouTubePlayer url={url} onEnded={nextPage} playing muted />
    </div>
  </React.Fragment>
);

Observation.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  url: PropTypes.string.isRequired,
};

export default withStyles(styles)(Observation);
