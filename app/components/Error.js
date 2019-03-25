import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  text: {
    margin: theme.spacing.unit * 3,
  },
});

const Error = ({ classes }) => (
  <>
    <Typography component="h3" variant="h5" className={classes.text}>
      Error
    </Typography>
    <Typography component="p" align="center" className={classes.text}>
      Error: You shouldn&apos;t be here
    </Typography>
  </>
);

Error.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(Error);
