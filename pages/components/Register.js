import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { register } from "../store/updaters/register";

const Register = props => (
    <React.Fragment>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Register here
        </Typography>
        <Button
            variant="contained"
            href="#contained-buttons"
            className={props.classes.button}
            onClick={register}
        >
            <Typography
                variant="subtitle1"
                color="primary"
            >
                Register
            </Typography>
        </Button>
    </React.Fragment>
);

export default Register
