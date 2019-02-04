import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }
});

function IndexPage(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <div className={classes.layout}>
                <Typography
                    component={"h2"}
                    variant={"h5"}
                    color={"inherit"}
                    align={"center"}
                    noWrap
                >
                    Hello World!
                </Typography>
            </div>
        </React.Fragment>
    );
}

IndexPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);
