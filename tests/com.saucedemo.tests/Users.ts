declare const process: {
	env: Record<string, string | undefined>;
};
const username = process.env.SAUCEDEMO_USERNAME as string;
const lockedUsername = process.env.SAUCEDEMO_LOCKED_USERNAME as string;
const password = process.env.SAUCEDEMO_PASSWORD as string;

export const loginUsers = [
    {
        username: 'standard_user',
        password: 'secret_sauce',
        description: 'Usuario válido',
        shouldSucceed: true,
    },
    {
        username: 'locked_out_user',
        password: 'secret_sauce',
        description: 'Usuario bloqueado',
        shouldSucceed: false,
    },
    {
        username: 'standard_user',
        password: 'clave-incorrecta',
        description: 'Contraseña incorrecta',
        shouldSucceed: false,
    },
];