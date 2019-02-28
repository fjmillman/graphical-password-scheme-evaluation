import state from "../state";

export function isValid() {
    if (state.icons.flag.some(flag => state.passIcons.includes(flag))) {
        return state.selected.forEach(icon => state.icons.pass.includes(icon)).filter(Boolean).length >= 1;
    }

    if (state.icons.skip.some(skip => state.passIcons.includes(skip))) {
        return state.selected.forEach(icon => state.icons.skip.includes(icon)).filter(Boolean).length === 1 &&
            state.selected.forEach(icon => state.icons.pass.includes(icon)).filter(Boolean).length === 5;
    }

    return true;
}
