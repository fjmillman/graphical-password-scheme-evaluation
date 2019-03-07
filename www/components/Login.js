import React from "react";
import PropTypes from "prop-types";
import { view } from "react-easy-state";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { login } from "../store/updaters/login";
import { getPassIcons } from "../store/selectors/getPassIcons";
import PassIconGrid from "./PassIconGrid";
import { getCurrentStage } from "../store/selectors/getCurrentStage";

const styles = theme => ({
    text: {
        margin: theme.spacing.unit * 3,
    },
    button: {
        margin: theme.spacing.unit,
        marginTop: theme.spacing.unit * 5,
        float: "right",
        clear: "both"
    },
});

const Login = props => (
    <React.Fragment>
        <Typography
            component={"h3"}
            variant={"h5"}
            className={props.classes.text}
        >
            Log in
        </Typography>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Stage {getCurrentStage()} of 3
        </Typography>
        <PassIconGrid passIcons={getPassIcons()}/>
        <Button
            variant="contained"
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

export default withStyles(styles)(view(Login));
