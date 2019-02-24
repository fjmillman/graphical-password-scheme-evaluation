import React from 'react';
import PropTypes from "prop-types";
import { view } from 'react-easy-state';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import PassIconGrid from "./PassIconGrid";
import { getPassIcons } from "../store/selectors/getPassIcons";
import { guess } from "../store/updaters/guess";

const Guess = props => (
    <React.Fragment>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Make a guess
        </Typography>
        <PassIconGrid passIcons={getPassIcons()}/>
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

export default view(Guess);
