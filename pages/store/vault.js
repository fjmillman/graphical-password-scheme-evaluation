import { store } from "react-easy-state";

const vault = store({
    rootUrl: "http://localhost:3000",
    page: 0,
    isRegistration: 1,
    iterations: 5,
    result: {
        username: "",
        password: ""
    }
});

export default vault;
