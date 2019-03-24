import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { view } from 'react-easy-state';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Content from '../components/Content';
import getProgress from '../store/selectors/getProgress';
import getPageNumber from '../store/selectors/getPageNumber';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  main: {
    margin: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5,
  },
});

const IndexPage = ({ classes }) => (
  <React.Fragment>
    <div className={classes.layout}>
      <Toolbar>
        <Typography component="h2" variant="h5">
          Graphical Password Scheme User Study
        </Typography>
        {getPageNumber() < 2 || getPageNumber() > 15 ? (
          ''
        ) : (
          <Typography component="h2" variant="h6">
            &nbsp;| Scheme {getPageNumber() < 9 ? '1' : '2'}
          </Typography>
        )}
      </Toolbar>
      <LinearProgress
        color="secondary"
        variant="determinate"
        value={getProgress()}
      />
      <main className={classes.main}>
        <Content />
      </main>
    </div>
  </React.Fragment>
);

IndexPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(view(IndexPage));
