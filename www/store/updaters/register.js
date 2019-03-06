import state from "../state";
import { getRandomStage } from "../selectors/getRandomStage";

export function register() {
    state.result.registrations.push(state.icons);
    state.isRegistration = !state.isRegistration;
    state.currentPassIcons = getRandomStage();
}
