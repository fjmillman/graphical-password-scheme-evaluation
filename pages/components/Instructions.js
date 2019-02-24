import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { nextPage } from "../store/updaters/nextPage";

const Instructions = props => (
    <React.Fragment>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            These are the instructions
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
                Continue
            </Typography>
        </Button>
    </React.Fragment>
);

Instructions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Instructions;
