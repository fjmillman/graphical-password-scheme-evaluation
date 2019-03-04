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

const Welcome = props => (
    <React.Fragment>
        <Typography
            component={"h3"}
            variant={"h5"}
            className={props.classes.text}
        >
            Welcome
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            Welcome to the graphical password authentication scheme study!
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            This study aims to measure the over-the-shoulder-attack (OSA) resistance of graphical password authentication schemes.
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            Click on the button in the lower right to begin the study.
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
                Begin
            </Typography>
        </Button>
    </React.Fragment>
);

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
