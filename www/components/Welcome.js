import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { nextPage } from "../store/updaters/nextPage";

const styles = theme => ({
    text: {
        margin: theme.spacing.unit * 3,
    },
    button: {
        margin: theme.spacing.unit,
        marginTop: theme.spacing.unit * 5,
        float: "right",
        clear: "both"
    },
});

const Welcome = props => (
    <React.Fragment>
        <Typography
            component={"h3"}
            variant={"h5"}
            className={props.classes.text}
        >
            Welcome
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            Thank you for participating in the graphical password authentication scheme study!
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            This study aims to measure the over-the-shoulder-attack (OSA) resistance of graphical password
            authentication schemes.
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            This study is intended for undergraduate students and will take approximately 20 minutes to complete.
            You will remain anomynous although information on age and gender will be collected for reporting purposes.
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            By participating in this study, you consent to the collection and use of your anonymised data for the sole
            purpose of my academic research. This should not be considered as legal or financial advice. If you have any
            questions, ethical concerns or any other issues regarding the study, you can withdraw at anytime by contacting
            me at <Link href={"mailto:fjm30@bath.ac.uk"}>fjm30@bath.ac.uk</Link>. For more information regarding the study
            consent policy, please visit: <Link href={"https://goo.gl/WaCYDj"} target="_blank" rel="noopener">goo.gl/WaCYDj</Link>
        </Typography>
        <Typography
            component={"p"}
            className={props.classes.text}
        >
            Click on the button below to accept these terms and conditions and begin the study.
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
                I Accept
            </Typography>
        </Button>
    </React.Fragment>
);

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
