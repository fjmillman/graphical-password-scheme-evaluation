import state from '../state';

export default function getToggle(passIcon) {
  if ((state.page === 3 || state.page === 9) && state.isRegistration) {
    if (state.icons.pass.includes(passIcon)) {
      return 'pass';
    }
    if (state.icons.flag.includes(passIcon)) {
      return 'flag';
    }
    if (state.icons.skip.includes(passIcon)) {
      return 'skip';
    }
    return false;
  }

  return state.selected.includes(passIcon);
}
