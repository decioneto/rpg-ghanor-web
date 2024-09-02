"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select, SelectItemsProps } from "@/components/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { createUserRegisterSchema } from "./userSchema";

type RegisterFormProps = {};

type RegisterUserType = z.infer<typeof createUserRegisterSchema>;

const options: SelectItemsProps[] = [
    {
        text: "Mestre",
        value: "master",
    },
    {
        text: "Jogador",
        value: "player",
    },
];

export function RegisterForm({}: RegisterFormProps) {
    const { register, handleSubmit, control } = useForm<RegisterUserType>({
        resolver: zodResolver(createUserRegisterSchema),
    });

    function handleRegisterUser(data: RegisterUserType) {
        console.log(data);
    }

    return (
        <form
            className="flex flex-col gap-8 mt-8 w-[450px] m-auto"
            onSubmit={handleSubmit(handleRegisterUser)}
        >
            <Input
                id="username"
                placeholder="Qual seu usuário?"
                register={register("username")}
            />
            <Controller
                control={control}
                name="roleName"
                render={({ field: { onChange } }) => (
                    <Select itens={options} onChange={onChange} />
                )}
            />
            <Input
                id="password"
                type="password"
                placeholder="Qual será sua senha?"
                register={register("password")}
            />
            <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirme sua senha"
                register={register("confirmPass")}
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
                <Button label="Criar conta" />
            </div>
        </form>
    );
}
