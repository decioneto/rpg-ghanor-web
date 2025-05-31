'use server';

import { prisma } from '@/services/prisma/prisma-service';
import { encrypt } from './helpers';

type CreateUser = {
    username: string;
    roleName: string;
    password: string;
};

export async function createUser({ username, password, roleName }: CreateUser) {
    if (await verifyDuplicateUser(username))
        throw new Error('Desculpe, mas já temos um hóspide com esse nome!');

    const hashPassword = encrypt(password);

    const role = await prisma.role.findFirst({
        where: {
            roleName: roleName,
        },
    });

    if (!role) return;

    await prisma.user.create({
        data: {
            username: username,
            password: hashPassword,
            role: {
                connect: {
                    id: role.id,
                },
            },
        },
    });
}

async function verifyDuplicateUser(username: string) {
    const user = await prisma.user.findFirst({
        where: {
            username: username,
        },
    });

    return user ? true : false;
}
