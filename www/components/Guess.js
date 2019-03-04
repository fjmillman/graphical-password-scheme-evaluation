import React from "react";
import PropTypes from "prop-types";
import { view } from "react-easy-state";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PassIconGrid from "./PassIconGrid";
import { getPassIcons } from "../store/selectors/getPassIcons";
import { guess } from "../store/updaters/guess";

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

const Guess = props => (
    <React.Fragment>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Make a guess
        </Typography>
        <PassIconGrid passIcons={getPassIcons()} cols={3}/>
        <Button
            variant="contained"
            className={props.classes.button}
            onClick={guess}
        >
            <Typography
                variant="subtitle1"
                color="primary"
            >
                Submit
            </Typography>
        </Button>
    </React.Fragment>
);

Guess.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(view(Guess));
