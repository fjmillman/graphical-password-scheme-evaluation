import axios from 'axios'
import vault from '../../store/vault'
import { nextPage } from "./nextPage";

export const submit = async () => {
    await axios.post(`${vault.rootUrl}/userStudyResult`, vault.result || {})
        .then(() => console.log('Results uploaded to the database ' + vault.path))
        .catch(error => console.error(error.stack));

    nextPage();
};
