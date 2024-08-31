import { icons } from "lucide-react";

type IconProps = {
    name: keyof typeof icons;
    color?: string;
};

export function Icon({ name, color = "text-ghanor-neutral-700" }: IconProps) {
    const LucideIcon = icons[name];

    return <LucideIcon size={20} className={color} />;
}
