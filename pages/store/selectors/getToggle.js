import state from "../state";

export function getToggle(passIcon) {
    if (state.page === 3 && state.isRegistration) {
        return state.icons.pass.includes(passIcon) || state.icons.flag.includes(passIcon) || state.icons.skip.includes(passIcon);
    }

    return state.selected.includes(passIcon);
}
