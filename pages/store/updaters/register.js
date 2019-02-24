import state from '../state';

export function register() {
    state.isRegistration = !state.isRegistration;
}
