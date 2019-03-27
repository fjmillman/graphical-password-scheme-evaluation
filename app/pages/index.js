import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { view } from 'react-easy-state';
import LinearProgress from '@material-ui/core/LinearProgress';
import Content from '../components/Content';
import getProgress from '../store/selectors/getProgress';
import NavigationBar from '../components/NavigationBar';

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
    marginBottom: theme.spacing.unit * 5,
  },
});

const IndexPage = ({ classes }) => (
  <>
    <div className={classes.layout}>
      <NavigationBar />
      <LinearProgress
        color="secondary"
        variant="determinate"
        value={getProgress()}
      />
      <main className={classes.main}>
        <Content />
      </main>
    </div>
  </>
);

IndexPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(view(IndexPage));
