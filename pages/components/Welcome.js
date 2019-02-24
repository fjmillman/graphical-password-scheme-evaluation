import React from 'react'
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { nextPage } from "../store/updaters/nextPage";

const Welcome = props => (
    <React.Fragment>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Welcome to the study!
        </Typography>
        <Button
            variant="contained"
            href="#contained-buttons"
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

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Welcome
