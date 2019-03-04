import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    text: {
        margin: theme.spacing.unit * 3,
    },
});

const Error = props => (
    <React.Fragment>
        <Typography
            component={"h3"}
            variant={"h5"}
            className={props.classes.text}
        >
            Error
        </Typography>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Error: You shouldn't be here
        </Typography>
    </React.Fragment>
);

Error.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Error);
