import React from "react";
import { view } from "react-easy-state";
import Welcome from "./Welcome";
import Brief from "./Brief";
import Instructions from "./Instructions";
import Authentication from "./Authentication";
import Observation from "./Observation";
import Guess from "./Guess";
import Debrief from "./Debrief";
import Complete from "./Complete";
import Error from "./Error";
import { getPageNumber } from "../store/selectors/getPageNumber";

const Content = () => {
    switch (getPageNumber()) {
        case 0:
            return <Welcome/>;
        case 1:
            return <Brief/>;
        case 2:
            return <Instructions/>;
        case 3:
            return <Authentication/>;
        case 4:
            return <Observation url={"https://www.youtu.be/P3lXKxOkxbg"}/>;
        case 5:
            return <Guess/>;
        case 6:
            return <Observation url={"https://www.youtu.be/P3lXKxOkxbg"}/>;
        case 7:
            return <Observation url={"https://www.youtu.be/P3lXKxOkxbg"}/>;
        case 8:
            return <Guess/>;
        case 9:
            return <Debrief/>;
        case 10:
            return <Complete/>;
        default:
            return <Error/>;
    }
};

export default view(Content);
