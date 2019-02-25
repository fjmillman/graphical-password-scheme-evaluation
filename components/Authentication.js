import React from "react";
import { view } from "react-easy-state";
import Register from "./Register";
import Login from "./Login";
import state from "../store/state";

const Authentication = () => (
    <React.Fragment>
        {state.isRegistration ? <Register/> : <Login/>}
    </React.Fragment>
);

export default view(Authentication);
