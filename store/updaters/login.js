import state from "../state";
import { nextPage } from "./nextPage";

export function login() {
    if (state.selected.length !== 6) {
        return;
    }

    if (state.icons.flag.some(flag => state.passIcons.includes(flag)) &&
        state.selected.some(icon => state.icons.pass.includes(icon))
    ) {
        state.valid++;
    } else if (state.icons.skip.some(skip => state.passIcons.includes(skip)) &&
        state.selected.forEach(icon => state.icons.skip.includes(icon)).filter(Boolean).length === 1 &&
        state.selected.forEach(icon => state.icons.pass.includes(icon)).filter(Boolean).length === 5
    ) {
        state.valid++;
    } else {
        state.valid++;
    }

    if (state.stage < 2) {
        state.stage++;
        state.selected = [];
        state.currentPassIcons = [...state.passIcons].sort(() => 0.5 - Math.random()).slice(0, 12);
        return;
    }

    state.result.logins.push(state.valid);

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
