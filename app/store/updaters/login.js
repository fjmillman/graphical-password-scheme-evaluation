import state from '../state';
import nextPage from './nextPage';
import isValid from '../selectors/isValid';
import isDragAndDropValid from '../selectors/isDragAndDropValid';
import getRandomStage from '../selectors/getRandomStage';
import endTimer from './endTimer';
import startTimer from './startTimer';

export default function login() {
  if (state.selected.length !== 6) {
    if (state.scheme === 1) alert('You must select 6 icons');
    if (state.scheme === 2) alert('You must make 6 connections');
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

  state.logins.push(attempt);

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

  state.schemeResult.logins.push(state.logins);
  state.iterations += 1;
  state.stage = 0;
  state.valid = 0;
  state.pastStages = [];
  state.selected = [];
  state.logins = [];
  state.currentPassIcons = getRandomStage();

  if (state.iterations === 10) {
    state.isLogin = !state.isLogin;
    state.isRegistration = !state.isRegistration;
    state.icons = {
      pass: [],
      skip: [],
      flag: [],
    };
    state.iterations = 0;
    nextPage();
  }
}
