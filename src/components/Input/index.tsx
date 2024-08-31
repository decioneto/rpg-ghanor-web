"use client";

import cs from "classnames";
import { useState } from "react";

type InputProps = {
    id: string;
    register?: any;
    placeholder: string;
    type?: "text" | "number" | "password";
};

export function Input({
    id,
    register,
    placeholder,
    type = "text",
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);

    function handleFocus() {
        setIsFocused(true);
    }

    function handleBlur() {
        if (!register) {
            setIsFocused(false);
        }
    }

    return (
        <div className="flex flex-col gap-2 w-full relative">
            <label
                htmlFor={id}
                className={cs(
                    "absolute top-0 left-4  text-ghanor-yellow-100 transition-transform font-title",
                    {
                        "translate-y-[4px] text-[10px]": isFocused,
                        "translate-y-[12px] text-lg]": !isFocused,
                    }
                )}
            >
                {placeholder}
            </label>
            <input
                id={id}
                type={type}
                className="h-12 bg-ghanor-yellow-700 rounded px-4 text-ghanor-neutral-200 outline-none pt-2"
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
}
