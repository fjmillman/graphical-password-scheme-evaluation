import vault from '../vault'
import { nextPage } from "./nextPage";

const login = () => {
    if (vault.iterations === 0) {
        nextPage();
        return;
    }

    vault.iterations--;
    vault.isRegistration = !vault.isRegistration;
};

export default login;
