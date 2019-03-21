import React from 'react';
import * as PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import Register from './Register';
import Login from './Login';
import state from '../store/state';

const Authentication = ({ scheme }) => (
  <React.Fragment>
    {state.isRegistration ? <Register /> : <Login scheme={scheme} />}
  </React.Fragment>
);

Authentication.propTypes = {
  scheme: PropTypes.number.isRequired,
};

export default view(Authentication);
