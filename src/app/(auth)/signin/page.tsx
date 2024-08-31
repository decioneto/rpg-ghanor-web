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
        <Input />
      </Container>
    </div>
  )
}