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
import { getPageNumber } from '../store/selectors/getPageNumber';
import { getScheme } from '../store/selectors/getScheme';
import { getUrl } from '../store/selectors/getUrl';

const Content = () => {
  switch (getPageNumber()) {
    case 0:
      return <Welcome />;
    case 1:
      return <Brief />;
    case 2:
      return <Instructions scheme={getScheme()} />;
    case 3:
      return <Authentication scheme={getScheme()} />;
    case 4:
      return <Observation url={getUrl(1)} />;
    case 5:
      return <Guess />;
    case 6:
      return <Observation url={getUrl(2)} />;
    case 7:
      return <Observation url={getUrl(3)} />;
    case 8:
      return <Guess />;
    case 9:
      return <Instructions scheme={getScheme()} />;
    case 10:
      return <Authentication scheme={getScheme()} />;
    case 11:
      return <Observation url={getUrl(1)} />;
    case 12:
      return <Guess />;
    case 13:
      return <Observation url={getUrl(2)} />;
    case 14:
      return <Observation url={getUrl(3)} />;
    case 15:
      return <Guess />;
    case 16:
      return <Debrief />;
    case 17:
      return <Complete />;
    default:
      return <Error />;
  }
};

export default view(Content);
