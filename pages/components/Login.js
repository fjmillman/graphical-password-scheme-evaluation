import React from 'react'
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { login } from "../store/updaters/login";

const Login = props => (
    <React.Fragment>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Login here
        </Typography>
        <Button
            variant="contained"
            href="#contained-buttons"
            className={props.classes.button}
            onClick={login}
        >
            <Typography
                variant="subtitle1"
                color="primary"
            >
                Login
            </Typography>
        </Button>
    </React.Fragment>
);

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Login
