import axios from "axios";
import state from "../state";
import { nextPage } from "./nextPage";

export async function submit() {
    await axios.post(`https://gpa-server.now.sh/result`, state.result || {})
        .then(() => console.log("Results uploaded to the database"))
        .catch(error => console.error(error.stack));

    nextPage();
}
