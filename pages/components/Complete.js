import React from 'react'
import Typography from '@material-ui/core/Typography';

const Complete = props => (
    <Typography
        component={"p"}
        align={"center"}
        className={props.classes.text}
    >
        Thank you for taking part in this study!
    </Typography>
);

export default Complete
