import React from 'react'
import { view } from 'react-easy-state'
import Register from './Register'
import Login from './Login'
import vault from '../store/vault'

const Authentication = props => (
    <React.Fragment>
        {vault.isRegistration ? <Register classes={props}/> : <Login classes={props}/>}
    </React.Fragment>
);

export default view(Authentication)
