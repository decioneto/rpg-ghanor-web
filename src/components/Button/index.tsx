import { tv } from "tailwind-variants";

type ButtonProps = {
    label: string;
    style?: "primary" | "secondary" | "ghost";
};

const button = tv({
    base: "rounded py-[14px] px-6",
});

export function Button({ label, style = "primary" }: ButtonProps) {
    return <button className={button()}>{label}</button>;
}
