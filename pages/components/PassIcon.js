import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';
import { withStyles } from '@material-ui/core/styles';
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { toggleIcon } from "../store/updaters/toggleIcon";
import { getToggle } from "../store/selectors/getToggle";

const styles = () => ({
    icon: {
        fontSize: 48,
        color: 'rgb(0, 0, 0)'
    },
    inactiveIcon: {
        background: 'rgba(0, 0, 0, 0)'
    },
    activeIcon: {
        background: 'rgba(0, 0, 0, 0.25)'
    }
});

const PassIcon = props => (
    <IconButton
        onClick={() => toggleIcon(props.passIcon)}
        className={getToggle(props.passIcon) ? props.classes.activeIcon : props.classes.inactiveIcon}
    >
        <Icon className={props.classes.icon}>{props.passIcon}</Icon>
    </IconButton>
);

PassIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    passIcon: PropTypes.object.isRequired,
};

export default withStyles(styles)(view(PassIcon));
