import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { Container } from "./components/Container";

export default function SignInPage() {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-8">
            <div>
                <Logo size="xl" />
            </div>
            <Container>
                <div className="flex flex-col gap-8 w-[400px]">
                    <Input id="username" placeholder="Digite seu email" />
                    <Input
                        id="password"
                        placeholder="Digite sua senha"
                        type="password"
                    />
                    <div className="flex gap-6 ">
                        <Button label="Criar conta" />
                        <Button label="Login" />
                    </div>
                </div>
            </Container>
        </div>
    );
}
