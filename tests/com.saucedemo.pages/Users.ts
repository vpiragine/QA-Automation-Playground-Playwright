declare const process: {
	env: Record<string, string | undefined>;
};
const username = process.env.SAUCEDEMO_USERNAME || 'standard_user';
const lockedUsername = process.env.SAUCEDEMO_LOCKED_USERNAME || 'locked_out_user';
const password = process.env.SAUCEDEMO_PASSWORD || 'secret_sauce';

export const loginUsers = [
    {
        username: username,
        password: password,
        description: 'Usuario válido',
        shouldSucceed: true,
    },
    {
        username: lockedUsername,
        password: password,
        description: 'Usuario bloqueado',
        shouldSucceed: false,
    },
    {
        username: username,
        password: 'clave-incorrecta',
        description: 'Contraseña incorrecta',
        shouldSucceed: false,
    },
];