import { store } from "react-easy-state";

const vault = store({
    path: "",
    page: 0,
    isRegistration: 1,
    iterations: 5,
    result: {
        username: "",
        password: ""
    }
});

export default vault;
