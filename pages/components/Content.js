import React from 'react';
import PropTypes from "prop-types";
import { view } from 'react-easy-state';
import Welcome from './Welcome';
import Brief from './Brief';
import Instructions from './Instructions';
import Authentication from './Authentication';
import Observation from './Observation';
import Guess from './Guess';
import Debrief from './Debrief';
import Complete from './Complete';
import Error from './Error';
import { getPageNumber } from "../store/selectors/getPageNumber";

const Content = props => {
    switch (getPageNumber()) {
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
            return <Error classes={props.classes}/>;
    }
};

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default view(Content);
