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
            You will be presented with a pairs of prototypes based on its corresponding graphical password scheme and you will run through the following steps in order for each prototype:
        </Typography>
        <List
            component={"ol"}
            disablePadding={true}
            dense={true}>
            <ListItem>
                <ListItemText
                    inset={true}
                    primary="1) Read through the instructions for use"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    inset={true}
                    primary="2) Attempt to authenticate (register and login) 10 times"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    inset={true}
                    primary="3) Observe a clip of the researcher logging in"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    inset={true}
                    primary="4) Guess the password after the first observation"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    inset={true}
                    primary="5) Observe 2 more clips of the researcher logging in"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                    inset={true}
                    primary="6) Guess the password after the third and final observation"
                />
            </ListItem>
        </List>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            In the final stage you will be able to submit your test results and complete the study.
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            Click on the button in the lower right to accept and begin the study.
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
                I Accept
            </Typography>
        </Button>
    </React.Fragment>
);

Brief.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Brief);
