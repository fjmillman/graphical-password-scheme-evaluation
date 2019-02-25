import React from "react";
import state from "../state";

export function getPassIcons() {
    if (!state.isRegistration) {
        return state.currentPassIcons;
    }

    return state.passIcons;
}
