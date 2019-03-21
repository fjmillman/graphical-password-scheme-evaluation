import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Register from './Register';
import Login from './Login';
import state from '../store/state';

const Authentication = props => (
  <React.Fragment>
    {state.isRegistration ? (
      <Register scheme={props.scheme} />
    ) : (
      <Login scheme={props.scheme} />
    )}
  </React.Fragment>
);

Authentication.propTypes = {
  scheme: PropTypes.number.isRequired
};

export default view(Authentication);
