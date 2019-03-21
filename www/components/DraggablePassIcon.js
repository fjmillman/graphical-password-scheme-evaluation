import React from "react";
import PropTypes from "prop-types";
import { view } from "react-easy-state";
import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { pairIcon } from "../store/updaters/pairIcon";
import { DragSource, DropTarget } from "react-dnd";
import flow from "lodash/flow";

const styles = () => ({
    icon: {
        fontSize: 48,
        color: "rgb(0, 0, 0)"
    },
    button: {
        display: "inline-block"
    }
});

const DraggablePassIcon = props => {
    const { passIcon, classes } = props;
    const { isDragging, connectDragSource } = props;
    const { canDrop, isOver, connectDropTarget } = props;

    const isActive = canDrop && isOver;

    return connectDropTarget(connectDragSource((
        <div style={{ textAlign: "center" }}>
            <IconButton
                disableRipple
                disableTouchRipple
                className={classes.button}
            >
                <Icon
                    className={classes.icon}
                    style={{
                        opacity: isDragging ? 0.5 : 1,
                        backgroundColor: isActive ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0)",
                    }}
                >
                    {passIcon}
                </Icon>
            </IconButton>
        </div>),
    ));
};

DraggablePassIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    passIcon: PropTypes.string.isRequired,
};

const ItemTypes = {
    ICON: 'icon'
};

const sourceSpec = {
    beginDrag(props) {
        return {  passIcon: props.passIcon };
    },
    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        if (!dropResult || item.passIcon === dropResult.passIcon) { return; }
        pairIcon(item.passIcon, dropResult.passIcon);
    },
};

const targetSpec = {
    drop(props) {
        return { passIcon: props.passIcon};
    },
};

const sourceCollect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
});

const targetCollect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
});

export default flow([
    DragSource(
        ItemTypes.ICON,
        sourceSpec,
        sourceCollect,
    ),
    DropTarget(
        ItemTypes.ICON,
        targetSpec,
        targetCollect,
    ),
])(withStyles(styles)(view(DraggablePassIcon)));
