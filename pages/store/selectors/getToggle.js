import state from "../state";

export function getToggle(passIcon) {
    return state.selected.includes(passIcon);
}
