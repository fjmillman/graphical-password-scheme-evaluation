import state from "../state";

export function register() {
    state.result.registrations.push(state.icons);
    state.isRegistration = !state.isRegistration;
    state.currentPassIcons = [...state.passIcons].sort(() => 0.5 - Math.random()).slice(0, 12);
}
