import state from '../state';
import setScheme from '../selectors/setScheme';
import startTimer from './startTimer';

export default function nextPage() {
  if (state.page === 0) setScheme();
  state.progress += 1;
  state.page += 1;
}
