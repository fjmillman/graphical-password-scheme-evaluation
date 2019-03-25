import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import nextPage from '../store/updaters/nextPage';

const styles = theme => ({
  text: {
    margin: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3,
    float: 'right',
    clear: 'both',
  },
});

const Instructions = ({ classes, scheme }) => {
  const SchemeOneInstructions = () => (
    <>
      <Typography component="p" className={classes.text}>
        There are 2 phases to this graphical password authentication scheme: the
        registration phases, and the login phases.
      </Typography>
      <Typography component="p" className={classes.text}>
        During the registration phases, you will be presented with a grid of
        icons, each of which you can click on in order to toggle and select.
        Here you will select 6 pass objects, 3 flag objects, and then 3 skip
        objects to be registered. The pass objects form your graphical password,
        the skip objects and the flag objects are defined as signaling objects
        which dictate the rules of selection during the login phases.
      </Typography>
      <Typography component="p" className={classes.text}>
        The login phase has 3 stages which will appear in a random order. The
        state of the screen in each stage will dictate which objects you select.
        Each stage will have a rule allocated to it as follows:
      </Typography>
      <List disablePadding dense className={classes.text}>
        <ListItem>
          <ListItemText
            primary="1) If the screen contains a flag object with pass objects
                        and no skip object, you need to select 1 pass object and
                        5 random objects."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2) If the screen contains a skip object with pass objects,
                        you need to select 1 skip object along with 5 pass objects."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="3) If the screen does not contain a flag object or any pass
                        objects, you need to select 6 random objects."
          />
        </ListItem>
      </List>
      <Typography component="p" className={classes.text}>
        The method of input for this scheme is selection where the aim is to
        select 6 icons on the screen. Which rule you follow depends on the
        appearance of the signalling objects on the screen as above. If you pass
        through each stage successfully, you will log in successfully. Otherwise
        you will fail.
      </Typography>
      <Typography component="p" className={classes.text}>
        Click on the button to continue.
      </Typography>
    </>
  );

  const SchemeTwoInstructions = () => (
    <>
      <Typography component="p" className={classes.text}>
        There are 2 phases to this graphical password authentication scheme: the
        registration phase, and the login phase.
      </Typography>
      <Typography component="p" className={classes.text}>
        During the registration phase, you will be presented with a grid of
        icons, each of which you can click on in order to toggle and select.
        Here you will select 6 pass objects, 3 flag objects, and 3 skip objects
        to be registered. The pass objects form your graphical password, the
        skip objects and the flag objects are defined as signalling objects
        which dictate the rules of selection during the login phase.
      </Typography>
      <Typography component="p" className={classes.text}>
        The login phase has 3 stages which will appear in a random order. The
        state of the screen in each stage will dictate which objects you select.
        Each stage will have a rule allocated to it as follows:
      </Typography>
      <List disablePadding dense className={classes.text}>
        <ListItem>
          <ListItemText
            primary="1) If the screen contains a flag object with pass objects
                        and no skip object, you need 1 connection between a pass
                        object and a flag object."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2) If the screen contains a skip object with pass objects,
                        you need 5 connections containing pass objects and 1
                        connection containing a skip object."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="3) If the screen does not contain a flag object or any pass
                        objects, you need 6 connections containing random objects."
          />
        </ListItem>
      </List>
      <Typography component="p" className={classes.text}>
        The method of input for this scheme is drag-and-drop where the aim is to
        make 6 connections between the icons by dragging one to the other on the
        screen. Which rule you follow depends on the appearance of the
        signalling objects on the screen. If you pass through each stage
        successfully, you will log in successfully. Otherwise you will fail.
      </Typography>
      <Typography component="p" className={classes.text}>
        Click on the button to continue.
      </Typography>
    </>
  );

  return (
    <>
      <Typography component="h3" variant="h5" className={classes.text}>
        Instructions
      </Typography>
      {scheme === 1 ? <SchemeOneInstructions /> : <SchemeTwoInstructions />}
      <Button variant="contained" className={classes.button} onClick={nextPage}>
        <Typography variant="subtitle1" color="primary">
          Continue
        </Typography>
      </Button>
    </>
  );
};

Instructions.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  scheme: PropTypes.number.isRequired,
};

export default withStyles(styles)(Instructions);
