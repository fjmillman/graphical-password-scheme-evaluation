import React from 'react';
import Welcome from '../../components/Welcome'
import Brief from '../../components/Brief'
import Instructions from '../../components/Instructions'
import Authentication from '../../components/Authentication'
import Observation from '../../components/Observation'
import Guess from '../../components/Guess'
import Debrief from '../../components/Debrief'
import Complete from '../../components/Complete'
import Error from '../../components/Error'
import vault from '../vault'

const getContent = (classes) => {
    switch (vault.page) {
        case 0:
            return <Welcome classes={classes}/>;
        case 1:
            return <Brief classes={classes}/>;
        case 2:
            return <Instructions classes={classes}/>;
        case 3:
            return <Authentication classes={classes}/>;
        case 4:
            return <Observation classes={classes}/>;
        case 5:
            return <Guess classes={classes}/>;
        case 6:
            return <Observation classes={classes}/>;
        case 7:
            return <Observation classes={classes}/>;
        case 8:
            return <Guess classes={classes}/>;
        case 9:
            return <Debrief classes={classes}/>;
        case 10:
            return <Complete classes={classes}/>;
        default:
            return <Error classes={classes}/>
    }
};

export default getContent;
