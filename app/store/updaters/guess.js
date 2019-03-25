import state from '../state';
import nextPage from './nextPage';

export default function guess() {
  if (state.selected.length < 6) {
    alert('You must select 6 icons');
    return;
  }

  state.schemeResult.guesses.push({
    selected: state.selected,
    valid: state.selected.filter(icon =>
      state.scheme === 1
        ? state.setPassIcons.schemeOne.includes(icon)
        : state.setPassIcons.schemeTwo.includes(icon)
    ).length,
  });

  state.selected = [];

  if (state.page === 8 || state.page === 15) {
    if (state.scheme === 1) {
      state.result.scheme1 = state.schemeResult;
      state.scheme = 2;
    } else if (state.scheme === 2) {
      state.result.scheme2 = state.schemeResult;
      state.scheme = 1;
    }

    state.schemeResult = {
      registration: {},
      logins: [],
      guesses: [],
    };
  }

  nextPage();
}
