import state from "../state";

export function getProgress() {
    return (state.progress / 24) * 100;
}
