import state from '../state';

export function getObservation() {
    switch(state.observation) {
        case 1:
            state.observation++;
            return "https://www.youtu.be/P3lXKxOkxbg";
        case 2:
            state.observation++;
            return "https://www.youtu.be/P3lXKxOkxbg";
        case 3:
            state.observation = 1;
            return "https://www.youtu.be/P3lXKxOkxbg";
    }
}
