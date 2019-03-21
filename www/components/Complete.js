import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  text: {
    margin: theme.spacing.unit * 3,
  },
});

const Complete = ({ classes }) => (
  <React.Fragment>
    <Typography component="h3" variant="h5" className={classes.text}>
      Complete
    </Typography>
    <Typography component="p" className={classes.text}>
      Thank you for taking part in this study!
    </Typography>
    <Typography component="p" className={classes.text}>
      If you would like to keep up to date with how these results will be used
      in my research project, you can email me at anytime by contacting me at
      <Link href="mailto:fjm30@bath.ac.uk">fjm30@bath.ac.uk</Link>.
    </Typography>
  </React.Fragment>
);

Complete.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(Complete);
