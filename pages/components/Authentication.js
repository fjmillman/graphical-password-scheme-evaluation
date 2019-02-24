import React from 'react'
import PropTypes from "prop-types";
import { view } from 'react-easy-state'
import Register from './Register'
import Login from './Login'
import state from '../store/state'

const Authentication = props => (
    <React.Fragment>
        {state.isRegistration ? <Register classes={props.classes}/> : <Login classes={props.classes}/>}
    </React.Fragment>
);

Authentication.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default view(Authentication)
