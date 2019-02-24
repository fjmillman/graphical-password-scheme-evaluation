import state from '../state'
import { nextPage } from "./nextPage";

export const guess = () => {
    state.result.guesses.push(state.selected);
    state.selected = [];
    nextPage();
};
