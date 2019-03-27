import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import InstructionsDialog from './InstructionsDialog';
import getPageNumber from '../store/selectors/getPageNumber';

const styles = () => ({
  grow: {
    flexGrow: 1,
  },
});

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    const { open } = this.state;

    const SchemeToolbar = () => (
      <>
        <Typography component="h2" variant="h6" className={classes.grow}>
          &nbsp;| Scheme {getPageNumber() < 8 ? '1' : '2'}
        </Typography>
        <IconButton
          color="inherit"
          aria-label="Instructions"
          onClick={this.handleClickOpen}
        >
          <Icon>library_books</Icon>
        </IconButton>
        <InstructionsDialog open={open} handleClose={this.handleClose} />
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
