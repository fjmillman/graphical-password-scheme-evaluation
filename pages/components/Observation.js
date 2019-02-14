import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { nextPage } from "../store/updaters/nextPage";

const Authentication = (props) => (
    <React.Fragment>
        <Typography
            component={"p"}
            align={"center"}
            className={props.classes.text}
        >
            Watch this video
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
                Next
            </Typography>
        </Button>
    </React.Fragment>
);

export default Authentication
