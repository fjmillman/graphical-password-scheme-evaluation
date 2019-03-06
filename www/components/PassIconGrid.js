import React from "react";
import PropTypes from "prop-types";
import { view } from "react-easy-state";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PassIcon from "./PassIcon";
import { getIsRegistration } from "../store/selectors/getIsRegistration";

const styles = () => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
    },
    gridList: {
        width: getIsRegistration ? 310 : 350,
        height: getIsRegistration ? 400 : 560,
    }
});

const PassIconGrid = props => {
    const passIconGrid = props.passIcons.map(passIcon => (
        <GridListTile key={passIcon}>
            <PassIcon passIcon={passIcon}/>
        </GridListTile>
    ));

    return (
        <div className={props.classes.root}>
            <GridList
                cellHeight={75}
                className={props.classes.gridList}
                cols={props.cols}
            >
                {passIconGrid}
            </GridList>
        </div>
    );
};

PassIconGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    passIcons: PropTypes.object.isRequired,
};

export default withStyles(styles)(view(PassIconGrid));
