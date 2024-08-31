import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import { Container } from "./components/Container";

export default function SignInPage() {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-8">
            <div>
                <Logo size="xl" />
            </div>
            <Container>
                <div className="flex flex-col gap-8 w-[400px]">
                    <h3 className="text-center font-title  text-lg leading-relaxed">
                        Que bom te ver de volta, <br />
                        aventureiro!
                    </h3>
                    <div className="w-32 h-[1px] bg-ghanor-neutral-400 m-auto" />
                    <Input id="username" placeholder="Nome, por favor?" />
                    <Input
                        id="password"
                        placeholder="Qual a senha?"
                        type="password"
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
                </div>
            </Container>
        </div>
    );
}
