import state from '../state';

export default function getProgress() {
  return (state.progress / 60) * 100;
}
