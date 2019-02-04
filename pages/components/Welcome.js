import Typography from '@material-ui/core/Typography';

const Welcome = (props) => (
    <Typography component={"p"} align={"center"} className={props.classes.text}>
        Welcome to the study!
    </Typography>
);

export default Welcome
