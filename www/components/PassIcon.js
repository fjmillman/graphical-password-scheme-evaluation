import React from "react";
import PropTypes from "prop-types";
import { view } from "react-easy-state";
import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { toggleIcon } from "../store/updaters/toggleIcon";
import { getToggle } from "../store/selectors/getToggle";

const styles = () => ({
    icon: {
        fontSize: 48,
        color: "rgb(0, 0, 0)"
    },
    activeIcon: {
        background: "rgba(0, 0, 0, 0.25)"
    },
    inactiveIcon: {
        background: "rgba(0, 0, 0, 0)"
    },
    passIcon: {
        background: "rgba(0, 0, 255, 0.25)"
    },
    flagIcon: {
        background: "rgba(255, 0, 0, 0.25)"
    },
    skipIcon: {
        background: "rgba(0, 255, 0, 0.25)"
    }
});

const PassIcon = props => (
    <IconButton
        onClick={() => toggleIcon(props.passIcon)}
        className={!getToggle(props.passIcon)
            ? props.classes.inactiveIcon
            : getToggle(props.passIcon) === "pass"
                ? props.classes.passIcon
                : getToggle(props.passIcon) === "flag"
                    ? props.classes.flagIcon
                    : getToggle(props.passIcon) === "skip"
                        ? props.classes.skipIcon
                        : props.classes.activeIcon
        }
    >
        <Icon className={props.classes.icon}>{props.passIcon}</Icon>
    </IconButton>
);

PassIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    passIcon: PropTypes.string.isRequired,
};

export default withStyles(styles)(view(PassIcon));
