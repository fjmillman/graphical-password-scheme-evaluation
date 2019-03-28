import React from 'react';
import * as PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import getScheme from '../store/selectors/getScheme';

class InstructionsDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { handleClose } = this.props;
    handleClose();
  }

  render() {
    const { open } = this.props;

    const SchemeOneInstructions = () => (
      <>
        <Typography gutterBottom>
          Here we describe how to use the graphical password authentication
          scheme. It comes in two phases with a registration component and a
          login component.
        </Typography>
        <Typography gutterBottom>
          As part of the registration you are required to select 6 pass objects,
          3 flag objects, and 3 skip objects. The pass objects act as your
          graphical password. The flag objects and the skip objects act as
          signalling objects.
        </Typography>
        <Typography gutterBottom>
          During the login phase you will be asked to follow the login process.
          You will be faced with a random selection of objects on the screen
          which are randomly changed over three different stages. You will be
          required to select objects by toggling them.
        </Typography>
        <Typography gutterBottom>
          Which objects you choose depends on the appearance (or non-appearance)
          of the signalling objects on the screen. The following rules apply for
          each screen in a random order:
        </Typography>
        <List disablePadding dense>
          <ListItem>
            <ListItemText
              primary="1) If the screen contains a flag object with pass objects
                        and no skip object, you need to select 1 pass object and
                        5 random objects."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2) If the screen contains a skip object with pass objects
                        regardless of whether a flag object is present or not,
                        you need to select 5 pass objects and 1 skip object."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="3) If the screen does not contain a flag object or any
                        pass objects, you need to select 6 random objects."
            />
          </ListItem>
        </List>
        <Typography gutterBottom>
          The appearance of a skip object takes precedence over that of a flag
          object. If you pass through each stage successfully, you will log in
          successfully. Otherwise you will fail.
        </Typography>
      </>
    );

    const SchemeTwoInstructions = () => (
      <>
        <Typography gutterBottom>
          Here we describe how to use the graphical password authentication
          scheme. It comes in two phases with a registration component and a
          login component.
        </Typography>
        <Typography gutterBottom>
          As part of the registration you are required to select 6 pass objects,
          3 flag objects, and 3 skip objects. The pass objects act as your
          graphical password. The flag objects and the skip objects act as
          signalling objects.
        </Typography>
        <Typography gutterBottom>
          During the login phase you will be asked to follow the login process.
          You will be faced with a random selection of objects on the screen
          which are randomly changed over three different stages. You will be
          required to drag and drop objects to form a connection between pairs
          of objects.
        </Typography>
        <Typography gutterBottom>
          Which objects you choose depends on the appearance (or non-appearance)
          of the signalling objects on the screen. The following rules apply for
          each screen in a random order:
        </Typography>
        <List disablePadding dense>
          <ListItem>
            <ListItemText
              primary="1) If the screen contains a flag object with pass objects
                        and no skip object, you need 1 connection containing a
                        pass object and a flag object in the pair and 5
                        connections containing any random objects in the pairs."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2) If the screen contains a skip object with pass objects,
                        regardless of whether a flag object is present or not,
                        you need 5 connections each containing at least one pass
                        object and no skip objects in each pair, and 1 connection
                        containing at least one skip object and no pass object
                        in the pair."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="3) If the screen does not contain a flag object or any pass
                        objects, you need 6 connections containing any random
                        objects in each pair."
            />
          </ListItem>
        </List>
        <Typography gutterBottom>
          The appearance of a skip object takes precedence over that of a flag
          object. If you pass through each stage successfully, you will log in
          successfully. Otherwise you will fail.
        </Typography>
      </>
    );

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          Instructions
        </DialogTitle>
        <DialogContent>
          {getScheme() === 1 ? (
            <SchemeOneInstructions />
          ) : (
            <SchemeTwoInstructions />
          )}
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

InstructionsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default InstructionsDialog;
