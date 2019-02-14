import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { submit } from "../store/updaters/submit";

const Debrief = props => (
    <React.Fragment>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Here is the Debrief!
        </Typography>
        <Button
            variant="contained"
            href="#contained-buttons"
            className={props.classes.button}
            onClick={submit}
        >
            <Typography
                variant="subtitle1"
                color="primary"
            >
                Complete
            </Typography>
        </Button>
    </React.Fragment>
);

export default Debrief
