import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-8">
            <div className="mt-24">
                <Logo size="lg" />
            </div>
            {/* <div className="my-auto"></div> */}
            <div className="mb-28">
                <Button
                    label="Criar novo personagem"
                    icon={<Button.Icon name="Swords" />}
                    type="button"
                    style="secondary"
                />
            </div>
        </div>
    );
}
