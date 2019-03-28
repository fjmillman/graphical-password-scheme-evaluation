import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import nextPage from '../store/updaters/nextPage';
import getScheme from '../store/selectors/getScheme';

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

const Instructions = ({ classes }) => {
  const SchemeOneInstructions = () => (
    <>
      <Typography component="p" className={classes.text}>
        Here we describe how to use the graphical password authentication
        scheme. It comes in two phases with a registration component and a login
        component.
      </Typography>
      <Typography component="p" className={classes.text}>
        As part of the registration you are required to select 6 pass objects, 3
        flag objects, and 3 skip objects. The pass objects act as your graphical
        password. The flag objects and the skip objects act as signalling
        objects.
      </Typography>
      <Typography component="p" className={classes.text}>
        During the login phase you will be asked to follow the login process.
        You will be faced with a random selection of objects on the screen which
        are randomly changed over three different stages. You will be required
        to drag and drop objects to form a connection between pairs of objects.
      </Typography>
      <Typography component="p" className={classes.text}>
        Which objects you choose depends on the appearance (or non-appearance)
        of the signalling objects on the screen. The following rules apply for
        each screen in a random order:
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
      <Typography component="p" className={classes.text}>
        The appearance of a skip object takes precedence over that of a flag
        object. If you pass through each stage successfully, you will log in
        successfully. Otherwise you will fail.
      </Typography>
    </>
  );

  const SchemeTwoInstructions = () => (
    <>
      <Typography component="p" className={classes.text}>
        Here we describe how to use the graphical password authentication
        scheme. It comes in two phases with a registration component and a login
        component.
      </Typography>
      <Typography component="p" className={classes.text}>
        As part of the registration you are required to select 6 pass objects, 3
        flag objects, and 3 skip objects. The pass objects act as your graphical
        password. The flag objects and the skip objects act as signalling
        objects.
      </Typography>
      <Typography component="p" className={classes.text}>
        During the login phase you will be asked to follow the login process.
        You will be faced with a random selection of objects on the screen which
        are randomly changed over three different stages. You will be required
        to drag and drop objects to form a connection between pairs of objects.
      </Typography>
      <Typography component="p" className={classes.text}>
        Which objects you choose depends on the appearance (or non-appearance)
        of the signalling objects on the screen. The following rules apply for
        each screen in a random order:
      </Typography>
      <List disablePadding dense className={classes.text}>
        <ListItem>
          <ListItemText
            primary="1) If the screen contains a flag object with pass objects
                        and no skip object, you need 1 connection containing
                        both a pass object and a flag object in the pair and 5
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
      <Typography component="p" className={classes.text}>
        The appearance of a skip object takes precedence over that of a flag
        object. If you pass through each stage successfully, you will log in
        successfully. Otherwise you will fail.
      </Typography>
    </>
  );

  return (
    <>
      <Typography component="h3" variant="h5" className={classes.text}>
        Instructions
      </Typography>
      {getScheme() === 1 ? (
        <SchemeOneInstructions />
      ) : (
        <SchemeTwoInstructions />
      )}
      <Typography component="p" className={classes.text}>
        Click on the button to continue.
      </Typography>
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
};

export default withStyles(styles)(Instructions);
