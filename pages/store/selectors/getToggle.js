import state from '../state'

export const getToggle = passIcon => {
    return state.selected.includes(passIcon);
};
