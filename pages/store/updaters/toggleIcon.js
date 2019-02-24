import state from '../state'

export const toggleIcon = passIcon => {
    if (state.selected.includes(passIcon)) {
        state.selected.splice(state.selected.indexOf(passIcon), 1);
    } else {
        state.selected.push(passIcon);
    }
};
