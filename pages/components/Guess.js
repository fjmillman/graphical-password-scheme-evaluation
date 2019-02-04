import Typography from '@material-ui/core/Typography';

const Guess = (props) => (
    <Typography component={"p"} align={"center"} className={props.classes.text}>
        Make a guess
    </Typography>
);

export default Guess
