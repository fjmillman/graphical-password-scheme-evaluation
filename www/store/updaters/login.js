import state from '../state';
import nextPage from './nextPage';
import isValid from '../selectors/isValid';
import isDragAndDropValid from '../selectors/isDragAndDropValid';
import getRandomStage from '../selectors/getRandomStage';
import endTimer from './endTimer';
import startTimer from './startTimer';

export default function login() {
  if (state.selected.length !== 6) {
    return;
  }

  const attempt = {
    selected: state.selected,
    valid: false,
    time: endTimer(),
  };

  if (
    (state.scheme === 1 && isValid()) ||
    (state.scheme === 2 && isDragAndDropValid())
  ) {
    state.valid += 1;
    attempt.valid = true;
  }

  state.authentication.logins.push(attempt);

  startTimer();

  if (state.stage < 2) {
    state.progress += 1;
    state.stage += 1;
    state.selected = [];
    state.currentPassIcons = getRandomStage();
    return;
  }

  if (state.valid === 3) {
    alert('You logged in successfully');
  } else {
    alert('You failed to login successfully');
  }

  state.schemeResult.authentications.push(state.authentication);
  state.iterations += 1;
  state.stage = 0;
  state.valid = 0;
  state.pastStages = [];
  state.selected = [];
  state.icons = {
    pass: [],
    skip: [],
    flag: [],
  };
  state.authentication = {
    registration: {},
    logins: [],
  };
  state.isRegistration = !state.isRegistration;
  state.isLogin = !state.isLogin;

  if (state.iterations === 1) {
    state.iterations = 0;
    nextPage();
  }
}
