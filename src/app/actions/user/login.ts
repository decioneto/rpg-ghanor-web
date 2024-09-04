'use server';

import { prisma } from '@/services/prisma/prisma-service';
import { encrypt } from './helpers';

type LoginUser = {
    username: string;
    password: string;
};

export async function login({ username, password }: LoginUser) {
    console.log('oi');
    const user = await prisma.user.findFirst({ where: { username: username } });
    const encryptedPass = encrypt(password);
    console.log(user, encryptedPass);

    if (!user || encryptedPass !== user.password) {
        throw new Error(
            'Desculpe, Não conhecemos nenhum cliente com esse nome!'
        );
    }
}
