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
import state from '../state'

export const getContent = props => {
    switch (state.page) {
        case 0:
            return <Welcome classes={props.classes}/>;
        case 1:
            return <Brief classes={props.classes}/>;
        case 2:
            return <Instructions classes={props.classes}/>;
        case 3:
            return <Authentication classes={props.classes}/>;
        case 4:
            return <Observation classes={props.classes}/>;
        case 5:
            return <Guess classes={props.classes}/>;
        case 6:
            return <Observation classes={props.classes}/>;
        case 7:
            return <Observation classes={props.classes}/>;
        case 8:
            return <Guess classes={props.classes}/>;
        case 9:
            return <Debrief classes={props.classes}/>;
        case 10:
            return <Complete classes={props.classes}/>;
        default:
            return <Error classes={props.classes}/>
    }
};
