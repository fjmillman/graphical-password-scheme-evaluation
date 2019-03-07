import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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

const Brief = props => (
    <React.Fragment>
        <Typography
            component={"h3"}
            variant={"h5"}
            className={props.classes.text}
        >
            Brief
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            You will be presented with a pair of prototypes based on its corresponding graphical password scheme
            and you will run through the following steps in order for each prototype:
            <List disablePadding={true} dense={true}>
                <ListItem>
                    <ListItemText primary="1) Read through the instructions for use"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="2) Attempt to authenticate (register and login) 10 times"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="3) Observe a clip of the researcher logging in"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="4) Guess the password after the first observation"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="5) Observe 2 more clips of the researcher logging in"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="6) Guess the password after the third and final observation"/>
                </ListItem>
            </List>
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            After completing this study, you will be asked to provide your age and gender before submitting your
            results.
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            Click on the button to begin the study.
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

Brief.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Brief);
