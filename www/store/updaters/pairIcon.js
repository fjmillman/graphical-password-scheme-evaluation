import state from "../state";

export function pairIcon(sourcePassIcon, targetPassIcon) {
    if (state.selected.length < 6 && !state.selected.filter(
        selected => selected.source === sourcePassIcon && selected.target === targetPassIcon
    ).length) {
        state.selected.push({source: sourcePassIcon, target: targetPassIcon});
    }
}
