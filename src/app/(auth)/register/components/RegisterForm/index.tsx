'use client';

import { createUser } from '@/app/actions/user/create';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Select, SelectItemsProps } from '@/components/Select';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { createUserRegisterSchema } from './userSchema';

type RegisterUserType = z.infer<typeof createUserRegisterSchema>;

const options: SelectItemsProps[] = [
    {
        text: 'Mestre',
        value: 'master',
    },
    {
        text: 'Jogador',
        value: 'player',
    },
];

export function RegisterForm() {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<RegisterUserType>({
        resolver: zodResolver(createUserRegisterSchema),
    });
    const router = useRouter();

    function handleRegisterUser(data: RegisterUserType) {
        const roleId = data.roleName === 'player' ? 1 : 2;

        createUser({
            username: data.username,
            password: data.password,
            roleId: roleId,
        })
            .then(() => {
                toast.success(
                    'Conta criada com sucesso, seja bem-vindo(a) aventureiro(a)'
                );
                router.push('/signin');
            })
            .catch((e) => {
                console.log(e);
                toast.error(`Opa, parece que algo deu errado. ${e.message}`);
            })
            .finally(() => {
                reset({
                    username: '',
                    password: '',
                    confirmPass: '',
                    roleName: 'Qual será seu papel?',
                });
            });
    }

    return (
        <>
            <form
                className="flex flex-col gap-8 mt-8 w-[450px] m-auto"
                onSubmit={handleSubmit(handleRegisterUser)}
            >
                <Input
                    id="username"
                    placeholder="Qual seu usuário?"
                    register={register('username')}
                    message={errors.username?.message}
                />
                <Controller
                    control={control}
                    name="roleName"
                    render={({
                        field: { onChange },
                        fieldState: { error },
                    }) => (
                        <Select
                            itens={options}
                            onChange={onChange}
                            message={error?.message}
                        />
                    )}
                />
                <Input
                    id="password"
                    type="password"
                    placeholder="Qual será sua senha?"
                    register={register('password')}
                    message={errors.password?.message}
                />
                <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirme sua senha"
                    register={register('confirmPass')}
                    message={errors.confirmPass?.message}
                />

                <div className="flex justify-between items-start">
                    <div className="text-sm">
                        <span className="font-title">
                            Regras para criar a senha:
                        </span>
                        <ul className="pl-2 text-ghanor-neutral-700">
                            <li>Deve conter pelo menos 8 caracteres</li>
                            <li>Deve conter letra maiúscula</li>
                            <li>Deve conter letra minúscula</li>
                            <li>Deve conter caracter numérico</li>
                        </ul>
                    </div>
                    <Button label="Criar conta" type="submit" />
                </div>
            </form>

            <div className="flex flex-col items-center mt-8">
                <span className="text-ghanor-yellow-700">
                    Ah, você já tem cadastro em nossa taverna?
                </span>
                <Link
                    href="/signin"
                    className="text-ghanor-yellow-100 hover:underline"
                >
                    Então vamos, entre!
                </Link>
            </div>
        </>
    );
}
