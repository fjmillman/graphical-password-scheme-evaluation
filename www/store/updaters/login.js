import state from "../state";
import { nextPage } from "./nextPage";
import { isValid } from "../selectors/isValid";

export function login() {
    if (state.selected.length !== 6) {
        return;
    }

    if (isValid()) {
        state.valid++;
    }

    state.result.logins.selected.push(state.selected);

    if (state.stage < 2) {
        state.stage++;
        state.selected = [];
        state.currentPassIcons = [...state.passIcons].sort(() => 0.5 - Math.random()).slice(0, 12);
        return;
    }

    state.result.logins.valid.push(state.valid);

    state.iterations++;
    state.stage = 0;
    state.valid = 0;
    state.selected = [];
    state.icons = {
        pass: [],
        skip: [],
        flag: [],
    };
    state.isRegistration = !state.isRegistration;

    if (state.iterations === 1) {
        nextPage();
        return;
    }
}
