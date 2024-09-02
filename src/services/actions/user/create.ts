import { prisma } from '@/services/prisma/prisma-service';
import { User } from '@prisma/client';

export async function createUser(data: User) {
    await prisma.user.create({
        data: {
            username: data.username,
            password: data.password,
            role: {
                connect: {
                    id: data.roleId,
                },
            },
        },
    });
}
