import React from 'react';
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
import getPageNumber from '../store/selectors/getPageNumber';

const Content = () => {
  switch (getPageNumber()) {
    case 0:
      return <Welcome />;
    case 1:
      return <Brief />;
    case 2:
      return <Instructions />;
    case 3:
      return <Authentication />;
    case 4:
      return <Observation />;
    case 5:
      return <Guess />;
    case 6:
      return <Observation />;
    case 7:
      return <Guess />;
    case 8:
      return <Instructions />;
    case 9:
      return <Authentication />;
    case 10:
      return <Observation />;
    case 11:
      return <Guess />;
    case 12:
      return <Observation />;
    case 13:
      return <Guess />;
    case 14:
      return <Debrief />;
    case 15:
      return <Complete />;
    default:
      return <Error />;
  }
};

export default view(Content);
