import state from "../state";

export function removeIconPair(iconPair) {
    if (state.selected.filter(selected => selected === iconPair).length) {
        state.selected.splice(state.selected.indexOf(iconPair), 1);
    }
}
