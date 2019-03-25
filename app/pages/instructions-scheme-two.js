import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { view } from 'react-easy-state';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

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
  text: {
    margin: theme.spacing.unit * 3,
  },
});

const InstructionsSchemeTwo = ({ classes }) => (
  <>
    <div className={classes.layout}>
      <Typography component="h3" variant="h5" className={classes.text}>
        Instructions
      </Typography>
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
        The method of input for this scheme is drag-and-point where the aim is
        to make 6 connections between the icons by dragging one to the other on
        the screen. Which rule you follow depends on the appearance of the
        signalling objects on the screen. If you pass through each stage
        successfully, you will log in successfully. Otherwise you will fail.
      </Typography>
    </div>
  </>
);

InstructionsSchemeTwo.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(view(InstructionsSchemeTwo));