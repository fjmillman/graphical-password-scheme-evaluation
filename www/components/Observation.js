import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import YouTubePlayer from "react-player/lib/players/YouTube";
import { nextPage } from "../store/updaters/nextPage";

const styles = theme => ({
    text: {
        margin: theme.spacing.unit * 3,
    },
});

const Observation = props => (
    <React.Fragment>
        <Typography
            component={"h3"}
            variant={"h5"}
            className={props.classes.text}
        >
            Observation
        </Typography>
        <YouTubePlayer
            url={props.url}
            onEnded={nextPage}
            playing
            muted
        />
    </React.Fragment>
);

Observation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Observation);
