'use client';

import { Logo } from '@/components/Logo';
import { Container } from './components/Container';
import { SignInForm } from './components/SigninForm';

export default function SignInPage() {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-8">
            <div>
                <Logo size="xl" />
            </div>
            <Container>
                <h3 className="text-center font-title text-lg leading-relaxed mb-4">
                    Que bom te ver de volta! <br />
                    Por favor, entre!
                </h3>
                <div className="w-32 h-[1px] bg-ghanor-neutral-400 mx-auto mb-8" />
                <SignInForm />
            </Container>
        </div>
    );
}
