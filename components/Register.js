import React from "react";
import PropTypes from "prop-types";
import { view } from "react-easy-state";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { register } from "../store/updaters/register";
import { getPassIcons } from "../store/selectors/getPassIcons";
import PassIconGrid from "./PassIconGrid";

const styles = theme => ({
    text: {
        margin: theme.spacing.unit * 3,
    },
    button: {
        margin: theme.spacing.unit,
        float: "right",
        clear: "both"
    },
});

const Register = props => (
    <React.Fragment>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Register here
        </Typography>
        <PassIconGrid passIcons={getPassIcons()} cols={4}/>
        <Button
            variant="contained"
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

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(view(Register));
