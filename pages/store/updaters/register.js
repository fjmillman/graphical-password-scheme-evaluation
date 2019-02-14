import vault from '../vault'

const register = () => {
    vault.result.username = 'fjmillman';
    vault.result.password = 'hello';

    vault.isRegistration = !vault.isRegistration;
};

export default register;
