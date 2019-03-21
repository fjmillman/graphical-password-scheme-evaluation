import state from '../state';

export default function getCurrentStage() {
  return state.stage + 1;
}
