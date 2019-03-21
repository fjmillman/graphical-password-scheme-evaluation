import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import nextPage from '../store/updaters/nextPage';

const styles = theme => ({
  text: {
    margin: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 5,
    float: 'right',
    clear: 'both',
  },
});

const Brief = ({ classes }) => (
  <React.Fragment>
    <Typography component="h3" variant="h5" className={classes.text}>
      Brief
    </Typography>
    <Typography component="p" className={classes.text}>
      You will be presented with a pair of prototypes based on their
      corresponding graphical password authentication schemes and you will run
      through the following steps in order for each prototype:
    </Typography>
    <List disablePadding dense className={classes.text}>
      <ListItem>
        <ListItemText primary="1) Read through the instructions for use" />
      </ListItem>
      <ListItem>
        <ListItemText primary="2) Attempt to authenticate (register and login) 10 times" />
      </ListItem>
      <ListItem>
        <ListItemText primary="3) Observe a clip of the researcher logging in" />
      </ListItem>
      <ListItem>
        <ListItemText primary="4) Guess the password after the first observation" />
      </ListItem>
      <ListItem>
        <ListItemText primary="5) Observe 2 more clips of the researcher logging in" />
      </ListItem>
      <ListItem>
        <ListItemText primary="6) Guess the password after the third and final observation" />
      </ListItem>
    </List>
    <Typography component="p" className={classes.text}>
      You will be asked to read through the instructions to learn about and
      understand how to use the corresponding prototype, and then you will be
      required to register and login with the scheme 10 times to ensure that you
      know how to use it.
    </Typography>
    <Typography component="p" className={classes.text}>
      In order to ensure that the results obtained are accurate throughout the
      course of the study, please run through the above steps for each scheme
      carefully without taking a break. If necessary, you may choose to take a
      break in between the 2 schemes.
    </Typography>
    <Typography component="p" className={classes.text}>
      Click on the button to begin the study.
    </Typography>
    <Button variant="contained" className={classes.button} onClick={nextPage}>
      <Typography variant="subtitle1" color="primary">
        Begin
      </Typography>
    </Button>
  </React.Fragment>
);

Brief.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default withStyles(styles)(Brief);
