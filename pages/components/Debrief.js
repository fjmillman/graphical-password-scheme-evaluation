import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { submit } from "../store/updaters/submit";

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

const Debrief = props => (
    <React.Fragment>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Here is the Debrief!
        </Typography>
        <Button
            variant="contained"
            className={props.classes.button}
            onClick={submit}
        >
            <Typography
                variant="subtitle1"
                color="primary"
            >
                Complete
            </Typography>
        </Button>
    </React.Fragment>
);

Debrief.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Debrief);
