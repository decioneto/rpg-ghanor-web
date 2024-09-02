import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Logo } from '@/components/Logo';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Container } from './components/Container';
import { createUserLoginSchema } from './loginSchema';

type LoginUserType = z.infer<typeof createUserLoginSchema>;

export default function SignInPage() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginUserType>({
        resolver: zodResolver(createUserLoginSchema),
    });

    return (
        <div className="flex flex-col items-center justify-center h-full gap-8">
            <div>
                <Logo size="xl" />
            </div>
            <Container>
                <form className="flex flex-col gap-8 w-[400px]">
                    <h3 className="text-center font-title  text-lg leading-relaxed">
                        Que bom te ver de volta, <br />
                        aventureiro!
                    </h3>
                    <div className="w-32 h-[1px] bg-ghanor-neutral-400 m-auto" />
                    <Input
                        id="username"
                        placeholder="Nome, por favor?"
                        register={register('username')}
                    />
                    <Input
                        id="password"
                        placeholder="Qual a senha?"
                        type="password"
                        register={register('password')}
                    />
                    <div className="flex gap-6 justify-end">
                        <Link href="register">
                            <Button label="Criar conta" style="ghost" />
                        </Link>
                        <Button
                            label="Entrar"
                            icon={<Button.Icon name="Sword" />}
                        />
                    </div>
                </form>
            </Container>
        </div>
    );
}
