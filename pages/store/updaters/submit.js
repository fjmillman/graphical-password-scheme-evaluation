import axios from 'axios'
import vault from '../../store/vault'
import { nextPage } from "./nextPage";

export const submit = async () => {
    await axios.post(`http://localhost:3000/userStudyResult`, vault.result || {})
        .then(() => console.log('Results uploaded to the database'))
        .catch(error => console.error(error.stack));

    nextPage();
};
