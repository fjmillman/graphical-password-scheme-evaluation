import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { submit } from '../store/updaters/submit';
import state from '../store/state';

const styles = theme => ({
  text: {
    margin: theme.spacing.unit * 3
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 5,
    float: 'right',
    clear: 'both'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  menu: {
    width: 200
  }
});

const genders = [
  {
    value: 'Male',
    label: 'Male'
  },
  {
    value: 'Female',
    label: 'Female'
  },
  {
    value: 'Other',
    label: 'Other'
  }
];

const Debrief = props => (
  <React.Fragment>
    <Typography component={'h3'} variant={'h5'} className={props.classes.text}>
      Debrief
    </Typography>
    <Typography component={'p'} className={props.classes.text}>
      You have reached the end of the study. Please enter your age and gender
      before completing the study.
    </Typography>
    <Typography component={'p'} className={props.classes.text}>
      <TextField
        label="Age"
        required
        error={state.formError}
        className={props.classes.textField}
        value={
          Number.isInteger(state.result.age) ? state.result.age.toString() : ''
        }
        onChange={e =>
          parseInt(e.target.value) >= 0
            ? (state.result.age = parseInt(e.target.value))
            : ''
        }
        type="number"
        InputLabelProps={{
          shrink: true
        }}
        helperText="Please enter your age"
        margin="normal"
        variant="outlined"
      />
      <TextField
        select
        required
        error={state.formError}
        label="Gender"
        className={props.classes.textField}
        value={state.result.gender}
        onChange={e => (state.result.gender = e.target.value)}
        SelectProps={{
          MenuProps: {
            className: props.classes.menu
          }
        }}
        helperText="Please select your gender"
        margin="normal"
        variant="outlined"
      >
        {genders.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Typography>
    <Typography component={'p'} className={props.classes.text}>
      Click on the button to complete the study and send off your results.
    </Typography>
    <Button
      variant="contained"
      className={props.classes.button}
      onClick={submit}
    >
      <Typography variant="subtitle1" color="primary">
        Complete
      </Typography>
    </Button>
  </React.Fragment>
);

Debrief.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(view(Debrief));
