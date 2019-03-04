import state from "../state";
import { nextPage } from "./nextPage";

export function guess() {
    state.result.guesses.selected.push(state.selected);
    state.result.guesses.valid.push(state.selected.filter(icon => state.setPassIcons.includes(icon)).length);
    state.selected = [];
    nextPage();
}
