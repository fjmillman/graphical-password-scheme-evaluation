import React from 'react';
import { store, view } from 'react-easy-state'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { increment } from './store/updaters/increment'

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    text: {
        margin: theme.spacing.unit * 3,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

function IndexPage(props) {
    const { classes } = props;

    const observations = store({
        stage: 0,
        content: (
            <Typography component={"p"} align={"center"} className={classes.text}>
                Welcome to the study!kjsbldfjkbasd
            </Typography>
        )
    });

    return (
        <React.Fragment>
            <div className={classes.layout}>
                <Toolbar className={classes.toolbarMain}>
                    <Typography
                        component={"h2"}
                        variant={"h5"}
                        color={"inherit"}
                        align={"center"}
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Graphical Password Scheme User Study
                    </Typography>
                </Toolbar>
                <main>
                    {observations.content}
                </main>
                <Button
                    variant="contained"
                    href="#contained-buttons"
                    className={classes.button}
                    onClick={increment}
                >
                    <Typography variant="subtitle1" color="primary">Continue</Typography>
                </Button>
            </div>
        </React.Fragment>
    );
}

IndexPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default view(withStyles(styles)(IndexPage));
