import state from "../state";

export function isValid() {
    if (state.icons.flag.some(flag => state.passIcons.includes(flag))) {
        return state.selected.filter(icon => state.icons.pass.includes(icon)).length >= 1;
    }

    if (state.icons.skip.some(skip => state.passIcons.includes(skip))) {
        return state.selected.filter(icon => state.icons.skip.includes(icon)).length === 1 &&
            state.selected.filter(icon => state.icons.pass.includes(icon)).length === 5;
    }

    return true;
}
