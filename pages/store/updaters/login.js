import state from '../state'
import { nextPage } from "./nextPage";

export const login = () => {
    if (state.iterations === 0) {
        nextPage();
        return;
    }

    state.iterations--;
    state.isRegistration = !state.isRegistration;
};
