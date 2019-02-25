import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { nextPage } from "../store/updaters/nextPage";

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

const Instructions = props => (
    <React.Fragment>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            These are the instructions
        </Typography>
        <Button
            variant="contained"
            className={props.classes.button}
            onClick={nextPage}
        >
            <Typography
                variant="subtitle1"
                color="primary"
            >
                Continue
            </Typography>
        </Button>
    </React.Fragment>
);

Instructions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Instructions);
