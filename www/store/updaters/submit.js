import url from "url";
import axios from "axios";
import state from "../state";
import { nextPage } from "./nextPage";

export async function submit() {
    let protocol = "https";
    let host = window.location.hostname;
    if (host.indexOf("localhost") > -1) {
        host = "localhost:3000";
        protocol = "http";
    }
    const baseUrl = url.format({  protocol, host, pathname: "/" });
    const apiUrl = process.env.NODE_ENV === "production" ? `${baseUrl}api/result` : "http://localhost:9999/api/result";

    await axios.post(apiUrl, state.result || {})
        .then(() => console.log("Results uploaded to database"))
        .catch(error => console.error(error.stack));

    nextPage();
}
