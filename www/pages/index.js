import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { view } from "react-easy-state";
import Content from "../components/Content";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    layout: {
        width: "auto",
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    main: {
        margin: theme.spacing.unit * 3,
    },
});

const IndexPage = props => (
    <React.Fragment>
        <div className={props.classes.layout}>
            <Toolbar className={props.classes.toolbarMain}>
                <Typography
                    component={"h2"}
                    variant={"h5"}
                    color={"inherit"}
                    align={"center"}
                    noWrap
                >
                    Graphical Password Scheme User Study
                </Typography>
            </Toolbar>
            <main className={props.classes.main}>
                <Content/>
            </main>
        </div>
    </React.Fragment>
);

IndexPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(view(IndexPage));
