import url from "url";
import axios from "axios";
import state from "../state";
import { nextPage } from "./nextPage";

export async function submit() {
    const baseUrl = url.format({  protocol: "https", host: window.location.hostname, pathname: "/" });
    const apiUrl = process.env.NODE_ENV === "production" ? `${baseUrl}api/result` : "http://localhost:9999/api/result";

    await axios.post(apiUrl, state.result || {})
        .then(() => console.log("Results uploaded to database"))
        .catch(error => console.error(error.stack));

    nextPage();
}
