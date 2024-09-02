'use server';

import { prisma } from '@/services/prisma/prisma-service';
import { encrypt } from './helpers';

type CreateUser = {
    username: string;
    roleId: number;
    password: string;
};

export async function createUser({ username, password, roleId }: CreateUser) {
    if (await verifyDuplicateUser(username))
        throw new Error('Desculpe, mas já temos um hóspide com esse nome!');

    const hashPassword = encrypt(password);
    console.log(hashPassword);

    await prisma.user.create({
        data: {
            username: username,
            password: hashPassword,
            role: {
                connect: {
                    id: roleId,
                },
            },
        },
    });

    await prisma.$disconnect();
}

async function verifyDuplicateUser(username: string) {
    const user = await prisma.user.findFirst({
        where: {
            username: username,
        },
    });

    await prisma.$disconnect();

    return user ? true : false;
}
