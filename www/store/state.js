import { store } from "react-easy-state";

const state = store({
    page: 0,
    isRegistration: 1,
    iterations: 0,
    stage: 0,
    passIcons: [
        "star",
        "face",
        "home",
        "print",
        "room",
        "visibility",
        "flag",
        "forward",
        "wifi",
        "work",
        "warning",
        "weekend",
        "computer",
        "watch",
        "headset",
        "sync",
        "ac_unit",
        "beach_access",
        "all_inclusive",
        "cake"
    ],
    currentPassIcons: [],
    selected: [],
    icons: {
        pass: [],
        skip: [],
        flag: []
    },
    valid: 0,
    result: {
        logins: {
            selected: [],
            valid: []
        },
        registrations: [],
        guesses: []
    }
});

export default state;
