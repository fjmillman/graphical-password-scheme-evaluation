import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import InstructionsDialog from './InstructionsDialog';
import getPageNumber from '../store/selectors/getPageNumber';
import getIteration from '../store/selectors/getIteration';
import PasswordDialog from './PasswordDialog';
import getPassword from '../store/selectors/getPassword';

const styles = () => ({
  grow: {
    flexGrow: 1,
  },
});

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordOpen: false,
      instructionsOpen: false,
    };
    this.handlePasswordOpen = this.handlePasswordOpen.bind(this);
    this.handlePasswordClose = this.handlePasswordClose.bind(this);
    this.handleInstructionsOpen = this.handleInstructionsOpen.bind(this);
    this.handleInstructionsClose = this.handleInstructionsClose.bind(this);
  }

  handlePasswordOpen = () => {
    this.setState({
      passwordOpen: true,
    });
  };

  handlePasswordClose = () => {
    this.setState({ passwordOpen: false });
  };

  handleInstructionsOpen = () => {
    this.setState({
      instructionsOpen: true,
    });
  };

  handleInstructionsClose = () => {
    this.setState({ instructionsOpen: false });
  };

  render() {
    const { classes } = this.props;

    const { passwordOpen, instructionsOpen } = this.state;

    const SchemeToolbar = () => (
      <>
        <Typography component="h2" variant="h6" className={classes.grow}>
          &nbsp;| Scheme {getPageNumber() < 8 ? '1' : '2'}
        </Typography>
        {(getPageNumber() !== 3 && getPageNumber() !== 9) ||
        getIteration() >= 5 ? (
          ''
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="Instructions"
              onClick={this.handlePasswordOpen}
            >
              <Icon>border_outer</Icon>
            </IconButton>
            <PasswordDialog
              open={passwordOpen}
              handleClose={this.handlePasswordClose}
              password={getPassword()}
            />
            <IconButton
              color="inherit"
              aria-label="Instructions"
              onClick={this.handleInstructionsOpen}
            >
              <Icon>library_books</Icon>
            </IconButton>
            <InstructionsDialog
              open={instructionsOpen}
              handleClose={this.handleInstructionsClose}
            />
          </>
        )}
      </>
    );

    return (
      <Toolbar>
        <Typography component="h2" variant="h5" nowrap="true">
          Graphical Password Scheme User Study
        </Typography>
        {getPageNumber() >= 2 && getPageNumber() <= 13 ? <SchemeToolbar /> : ''}
      </Toolbar>
    );
  }
}

export default withStyles(styles)(NavigationBar);
