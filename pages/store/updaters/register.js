import vault from '../vault'

export const register = () => {
    vault.result.username = 'fjmillman';
    vault.result.password = 'hello';

    vault.isRegistration = !vault.isRegistration;
};
