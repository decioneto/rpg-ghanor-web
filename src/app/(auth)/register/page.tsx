import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";

type RegisterPageProps = {};

export default function RegisterPage() {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-8">
            <div>
                <Logo size="lg" />
            </div>
            <div>
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-title text-center">
                        Ah! É novo por aqui? <br />
                        Seja bem vindo, aventureiro!
                    </h3>
                    <p className="text-ghanor-neutral-700 mt-4 text-center">
                        Crie sua conta em nossa taverna e ganhe de brinde nosso
                        prato da casa, <br />
                        um delicioso Leitão à Ghanor e duas canecas de hidromel!
                    </p>
                </div>
                <form className="flex flex-col gap-8 mt-8 w-[450px] m-auto">
                    <Input id="username" placeholder="Qual seu nome?" />
                    <Input id="username" placeholder="Qual seu papel?" />
                    <Input id="username" placeholder="Qual será sua senha?" />
                    <Input id="username" placeholder="Confirme sua senha" />

                    <div className="flex justify-between items-start">
                        <div className="text-sm">
                            <span className="font-title">
                                Regras para criar a senha:
                            </span>
                            <ul className="pl-4 text-ghanor-neutral-700">
                                <li>Deve conter pelo menos 8 caracteres</li>
                                <li>Deve conter letra maiúscula</li>
                                <li>Deve conter letra minúscula</li>
                                <li>Deve conter caracter numérico</li>
                            </ul>
                        </div>
                        <Button label="Criar conta" />
                    </div>
                </form>
            </div>
        </div>
    );
}
