import vault from '../vault'
import { nextPage } from "./nextPage";

export const login = () => {
    if (vault.iterations === 0) {
        nextPage();
        return;
    }

    vault.iterations--;
    vault.isRegistration = !vault.isRegistration;
};
