import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import Icon from '@material-ui/core/Icon';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const styles = () => ({
  passGridList: {
    width: 260,
    height: 160,
  },
  gridList: {
    width: 260,
    height: 80,
  },
  root: {
    textAlign: 'center',
  },
  button: {
    display: 'inline-block',
  },
  icon: {
    fontSize: 48,
    color: 'rgb(0, 0, 0)',
  },
});

class PasswordDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { handleClose } = this.props;
    handleClose();
  }

  render() {
    const {
      classes,
      open,
      password: { pass, flag, skip },
    } = this.props;

    const passIconSet = pass.map(passIcon => (
      <GridListTile key={passIcon} className={classes.root}>
        <IconButton disabled className={classes.button}>
          <Icon className={classes.icon}>{passIcon}</Icon>
        </IconButton>
      </GridListTile>
    ));
    const flagIconSet = flag.map(flagIcon => (
      <GridListTile key={flagIcon} className={classes.root}>
        <IconButton disabled className={classes.button}>
          <Icon className={classes.icon}>{flagIcon}</Icon>
        </IconButton>
      </GridListTile>
    ));
    const skipIconSet = skip.map(skipIcon => (
      <GridListTile key={skipIcon} className={classes.root}>
        <IconButton disabled className={classes.button}>
          <Icon className={classes.icon}>{skipIcon}</Icon>
        </IconButton>
      </GridListTile>
    ));

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          Password
        </DialogTitle>
        <DialogContent>
          <Typography>Pass Objects</Typography>
          <GridList cellHeight={75} className={classes.passGridList} cols={3}>
            {passIconSet}
          </GridList>
          <Typography>Flag Objects</Typography>
          <GridList cellHeight={75} className={classes.gridList} cols={3}>
            {flagIconSet}
          </GridList>
          <Typography>Skip Objects</Typography>
          <GridList cellHeight={75} className={classes.gridList} cols={3}>
            {skipIconSet}
          </GridList>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

PasswordDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  password: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string.isRequired)),
};

export default withStyles(styles)(PasswordDialog);
