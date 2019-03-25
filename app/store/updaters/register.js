import state from '../state';
import getRandomStage from '../selectors/getRandomStage';
import startTimer from './startTimer';

export default function register() {
  if (
    state.icons.pass.length < 6 ||
    state.icons.flag.length < 3 ||
    state.icons.skip.length < 3
  ) {
    alert('You must select 6 pass icons, 3 flag icons, and 3 skip icons');
    return;
  }

  state.schemeResult.registration = state.icons;
  state.currentPassIcons = getRandomStage();
  state.isRegistration = !state.isRegistration;
  state.isLogin = !state.isLogin;
  state.progress += 1;
  startTimer();
}
