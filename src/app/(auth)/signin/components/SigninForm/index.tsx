'use client';

import { login } from '@/app/actions/user/login';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { createUserLoginSchema } from '../../loginSchema';

type LoginUserType = z.infer<typeof createUserLoginSchema>;
type LoginData = {
    username: string;
    password: string;
};

export function SignInForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginUserType>({
        resolver: zodResolver(createUserLoginSchema),
    });
    const router = useRouter();

    function handleSignInSubmit({ username, password }: LoginData) {
        console.log(username, password);
        login({
            username,
            password,
        })
            .then(() => {
                toast.success(
                    `Quem bom te ver de volta ${username}. Por favor, entrar!`
                );
                router.push('/home');
            })
            .catch((e) => {
                toast.error(e.message);
            });
    }

    return (
        <form
            className="flex flex-col gap-8 w-[400px]"
            onSubmit={handleSubmit(handleSignInSubmit)}
        >
            <Input
                id="username"
                placeholder="Nome, por favor?"
                register={register('username')}
                message={errors.username?.message}
            />
            <Input
                id="password"
                placeholder="Qual a senha?"
                type="password"
                register={register('password')}
                message={errors.password?.message}
            />
            <div className="flex gap-6 justify-end">
                <Link href="register">
                    <Button label="Criar conta" style="ghost" />
                </Link>
                <Button
                    label="Entrar"
                    icon={<Button.Icon name="Sword" />}
                    type="submit"
                />
            </div>
        </form>
    );
}
