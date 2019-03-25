import state from '../state';
import nextPage from './nextPage';

export default function completeObservation() {
  if (state.observation < 2) {
    state.observation += 1;
  } else {
    state.observation = 0;
  }

  nextPage();
}
