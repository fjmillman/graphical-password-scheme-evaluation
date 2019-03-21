import state from '../state';

export default function getPassIcons() {
  if (state.isLogin) return state.currentPassIcons;
  return state.passIcons;
}
