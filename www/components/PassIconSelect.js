import React from "react";
import PropTypes from "prop-types";
import { view } from "react-easy-state";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { getIsRegistration } from "../store/selectors/getIsRegistration";
import PassIcon from "./PassIcon";

const styles = () => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        overflow: "hidden",
    },
    registrationGridList: {
        width: 250,
        height: 550,
    },
    loginGridList: {
        width: 250,
        height: 350,
    },
});

const PassIconSelect = props => {
    const passIconGrid = props.passIcons.map(passIcon => (
        <GridListTile key={passIcon}>
            <PassIcon passIcon={passIcon}/>
        </GridListTile>
    ));

    return (
        <div className={props.classes.root}>
            <GridList
                cellHeight={75}
                className={getIsRegistration() ? props.classes.registrationGridList : props.classes.loginGridList}
                cols={3}
            >
                {passIconGrid}
            </GridList>
        </div>
    );
};

PassIconSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    passIcons: PropTypes.object.isRequired,
};

export default withStyles(styles)(view(PassIconSelect));
