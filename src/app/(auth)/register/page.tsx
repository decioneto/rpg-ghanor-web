import { Logo } from "@/components/Logo";
import { RegisterForm } from "./components/RegisterForm";

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
                <RegisterForm />
            </div>
        </div>
    );
}
