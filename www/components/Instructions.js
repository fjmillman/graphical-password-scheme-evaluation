import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
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
                    and 3 flag objects to be registered. The pass objects form your graphical password, the skip
                    objects and the flag objects are defined as signaling objects which dictate the rules of selection
                    during the login stage.
                </Typography>
                <Typography
                    component={"p"}
                    className={props.classes.text}
                >
                    The login stage has 3 stages each with a rule assigned to it as follows:
                </Typography>
                <List
                    disablePadding={true}
                    dense={true}
                    className={props.classes.text}
                >
                    <ListItem>
                        <ListItemText primary="1) If a flag object appears with pass objects and no skip objects, you
                        need to select 1 pass object and 5 random objects."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2) If a skip object appears with pass objects regardless of the appearance
                        of a flag object, you need to select 5 pass objects and 1 skip object."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3) If neither a flag object or pass object appears, you need to select 6
                        random objects."/>
                    </ListItem>
                </List>
                <Typography
                    component={"p"}
                    className={props.classes.text}
                >
                    During each stage, you will be presented with a random selection of objects on the screen. The method
                    of input for this scheme is selection where the aim is to select 6 icons on the screen. Which rule
                    you follow depends on the appearance of the signalling objects on the screen. The ordering of stages
                    is randomised. If you pass through each stage successfully, you will log in successfully. If you
                    fail one or more stages, you will fail to log in.
                </Typography>
            </React.Fragment>
        );
    } else if (props.scheme === 2) {
        instructions = (
            <React.Fragment>
                <Typography
                    component={"p"}
                    className={props.classes.text}
                >
                    There are 2 phases to this graphical password authentication scheme: the registration phase, and the
                    login phase.
                </Typography>
                <Typography
                    component={"p"}
                    className={props.classes.text}
                >
                    During the registration phase, you will be presented with a grid of icons, each of which you can
                    click on in order to toggle and select. Here you will select 6 pass objects, 3 skipping objects,
                    and 3 flag objects to be registered. The pass objects form your graphical password, the skip
                    objects and the flag objects are defined as signalling objects which dictate the rules of selection
                    during the login phase.
                </Typography>
                <Typography
                    component={"p"}
                    className={props.classes.text}
                >
                    The login phase has 3 stages each with a rule assigned to it as follows:
                </Typography>
                <List
                    disablePadding={true}
                    dense={true}
                    className={props.classes.text}
                >
                    <ListItem>
                        <ListItemText primary="1) If a flag object appears with pass objects and no skip objects, you
                        need a connection containing a pass object and a flag object, and 5 further connections containing
                        random objects."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2) If a skip object appears with pass objects regardless of the appearance
                        of a flag object, you need 5 connections containing pass objects and 1 connection containing a
                        skip object."/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3) If neither a flag object or pass object appears, you need 6 connections
                        containing random objects."/>
                    </ListItem>
                </List>
                <Typography
                    component={"p"}
                    className={props.classes.text}
                >
                    During each stage, you will be presented with a random selection of objects on the screen. The method
                    of input for this scheme is drag-and-point where the aim is to make 6 connections between the icons
                    on the screen. Which rule you follow depends on the appearance of the signalling objects on the screen.
                    The ordering of stages is randomised. If you pass through each stage successfully, you will log in
                    successfully. If you fail one or more stages, you will fail to log in.
                </Typography>
            </React.Fragment>
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
