import React from "react";
import PropTypes from "prop-types";
import { view } from "react-easy-state";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { register } from "../store/updaters/register";
import { getPassIcons } from "../store/selectors/getPassIcons";
import PassIconSelect from "./PassIconSelect";

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

const Register = props => (
    <React.Fragment>
        <Typography
            component={"h3"}
            variant={"h5"}
            className={props.classes.text}
        >
            Registration
        </Typography>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Select 6 pass objects, 3 flag objects, and 3 skipping objects
        </Typography>
        <PassIconSelect passIcons={getPassIcons()}/>
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
    scheme: PropTypes.number.isRequired,
};

export default withStyles(styles)(view(Register));
