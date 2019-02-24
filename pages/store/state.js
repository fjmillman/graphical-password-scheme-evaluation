import { store } from "react-easy-state";

const state = store({
    page: 0,
    isRegistration: 1,
    iterations: 5,
    observation: 1,
    selected: [],
    result: {
        guesses: []
    }
});

export default state;
