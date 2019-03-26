import React from 'react';
import { view } from 'react-easy-state';
import Register from './Register';
import Login from './Login';
import getIsRegistration from '../store/selectors/getIsRegistration';

const Authentication = () => (
  <>{getIsRegistration() ? <Register /> : <Login />}</>
);

export default view(Authentication);
