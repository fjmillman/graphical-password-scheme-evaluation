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
        marginTop: theme.spacing.unit * 5,
        float: "right",
        clear: "both"
    },
});

const Instructions = props => {
    let instructions;

    if (props.scheme === 1) {
        instructions = (
            <React.Fragment>
                <Typography
                    component={"p"}
                    className={props.classes.text}
                >
                    There are 2 stages to this graphical password authentication scheme: the registration stage, and the
                    login stage.
                </Typography>
                <Typography
                    component={"p"}
                    className={props.classes.text}
                >
                    During the registration stage, you will be presented with a grid of icons, each of which you can
                    click on in order to toggle and select. Here you will select 6 pass objects, 3 skipping objects,
                    and 3 flag objects to be registered. The pass objects form your graphical password, the skipping
                    objects and the flag objects are defined as signaling objects which dictate the rules of selection
                    during the login stage.
                </Typography>
                <Typography
                    component={"p"}
                    className={props.classes.text}
                >
                    The login stage has 3 stages. During each stage, you will be presented with a random selection of
                    objects on the screen. The aim is to select a number of objects on the screen at each stage according
                    to the rules of the graphical password authentication scheme. If you pass through each stage
                    successfully, you will have logged in successfully. If you fail one or more stages, you will have
                    failed.
                </Typography>
                <Typography
                    component={"p"}
                    className={props.classes.text}
                >

                </Typography>
            </React.Fragment>
        );
    } else if (props.scheme === 2) {
        instructions = (
            <Typography
                component={"p"}
                className={props.classes.text}
            >
                Instructions for scheme 2 to be implemented.
            </Typography>
        );
    }

    return (
        <React.Fragment>
            <Typography
                component={"h3"}
                variant={"h5"}
                className={props.classes.text}
            >
                Instructions
            </Typography>
            {instructions}
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
};

Instructions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Instructions);
