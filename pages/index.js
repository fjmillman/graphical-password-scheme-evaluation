import React from 'react';
import PropTypes from 'prop-types';
import { store, view } from 'react-easy-state'
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { getContent } from './store/selectors/getContent'

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

const page = store({ num: 0 });

const IndexPage = props => {
    const { classes } = props;

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
                    {getContent(page.num, classes)}
                </main>
                <Button
                    variant="contained"
                    href="#contained-buttons"
                    className={classes.button}
                    onClick={() => page.num++}
                >
                    <Typography variant="subtitle1" color="primary">Continue</Typography>
                </Button>
            </div>
        </React.Fragment>
    );
};

IndexPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(view(IndexPage));
