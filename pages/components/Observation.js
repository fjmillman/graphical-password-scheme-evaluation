import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import YouTubePlayer from 'react-player/lib/players/YouTube'
import { getObservation } from "../store/selectors/getObservation";
import { nextPage } from "../store/updaters/nextPage";

const Observation = props => {
    const url = getObservation();

    return (
        <React.Fragment>
            <Typography
                component={"p"}
                align={"center"}
                className={props.classes.text}
            >
                Watch this video
            </Typography>
            <YouTubePlayer
                url={url}
                onEnded={nextPage}
                playing
                muted
            />
        </React.Fragment>
    );
};

Observation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Observation;
