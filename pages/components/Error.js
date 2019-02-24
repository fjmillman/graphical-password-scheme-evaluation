import React from 'react'
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';

const Error = props => (
    <Typography
        component={"p"}
        align={"center"}
        className={props.classes.text}
    >
        Error: You shouldn't be here
    </Typography>
);

Error.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Error
