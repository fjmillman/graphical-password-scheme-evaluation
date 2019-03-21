import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { view } from 'react-easy-state';
import Content from '../components/Content';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { getProgress } from '../store/selectors/getProgress';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  main: {
    margin: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5
  }
});

const IndexPage = props => (
  <React.Fragment>
    <div className={props.classes.layout}>
      <Toolbar>
        <Typography
          component={'h2'}
          variant={'h5'}
          color={'inherit'}
          align={'center'}
          noWrap
        >
          Graphical Password Scheme User Study
        </Typography>
      </Toolbar>
      <LinearProgress
        color='secondary'
        variant='determinate'
        value={getProgress()}
      />
      <main className={props.classes.main}>
        <Content />
      </main>
    </div>
  </React.Fragment>
);

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(view(IndexPage));
