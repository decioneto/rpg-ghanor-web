import { icons } from 'lucide-react';
import { MouseEvent } from 'react';
import { tv } from 'tailwind-variants';
import { Icon } from '../Icon';

type ButtonProps = {
    label: string;
    style?: 'primary' | 'secondary' | 'ghost';
    icon?: JSX.Element;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    type?: 'submit' | 'button';
};

type ButtonIconType = {
    name: keyof typeof icons;
};

const button = tv({
    base: 'rounded py-[14px] px-6 shadow font-title uppercase text-xs flex gap-2 items-center',
    variants: {
        color: {
            primary: 'bg-ghanor-clay-100 transition-all hover:brightness-125',
            secondary: 'bg-ghanor-neutral-400',
            ghost: 'bg-ghanor-neutral-400/0 transition-colors hover:bg-ghanor-neutral-400/30',
        },
    },
});

export function Button({
    label,
    style = 'primary',
    icon,
    onClick,
    type = 'button',
}: ButtonProps) {
    return (
        <button
            className={button({ color: style })}
            onClick={onClick}
            type={type}
        >
            {icon}
            {label}
        </button>
    );
}

Button.Icon = function ButtonIcon({ name }: ButtonIconType) {
    return <Icon name={name} />;
};
