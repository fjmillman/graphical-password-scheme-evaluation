import state from "../state";
import { nextPage } from "./nextPage";
import { isValid } from "../selectors/isValid";
import { getRandomStage } from "../selectors/getRandomStage";

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
        state.currentPassIcons = getRandomStage();
        return;
    }

    state.result.logins.valid.push(state.valid);
    state.iterations++;
    state.stage = 0;
    state.valid = 0;
    state.pastStages = [];
    state.selected = [];
    state.icons = {
        pass: [],
        skip: [],
        flag: [],
    };

    if (state.iterations === 1) {
        nextPage();
        return;
    }
}
