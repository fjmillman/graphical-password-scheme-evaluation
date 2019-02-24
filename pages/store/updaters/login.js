import state from "../state";
import { nextPage } from "./nextPage";

export function login() {
    if (state.iterations === 0) {
        nextPage();
        return;
    }

    state.iterations--;
    state.isRegistration = !state.isRegistration;
}
