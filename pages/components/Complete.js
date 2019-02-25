import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    text: {
        margin: theme.spacing.unit * 3,
    },
});

const Complete = props => (
    <Typography
        component={"p"}
        align={"center"}
        className={props.classes.text}
    >
        Thank you for taking part in this study!
    </Typography>
);

Complete.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Complete);
