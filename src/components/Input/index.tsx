'use client';

import cs from 'classnames';
import { FocusEvent, useState } from 'react';

type InputProps = {
    id: string;
    register: any;
    placeholder: string;
    type?: 'text' | 'number' | 'password';
    message?: string;
};

export function Input({
    id,
    register,
    placeholder,
    type = 'text',
    message,
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    function handleFocus() {
        setIsFocused(true);
    }

    function handleBlur(e: FocusEvent<HTMLInputElement>) {
        console.log(e.currentTarget.value);
        if (!e.currentTarget.value) {
            setIsFocused(false);
        }
    }

    return (
        <div className="flex flex-col gap-2 w-full relative">
            <label
                htmlFor={id}
                className={cs(
                    'absolute top-0 left-4 text-ghanor-yellow-100 transition-transform font-title pointer-events-none',
                    {
                        'translate-y-[4px] text-[10px]': isFocused,
                        'translate-y-[12px] text-lg]': !isFocused,
                    }
                )}
            >
                {placeholder}
            </label>
            <input
                id={id}
                type={type}
                className="h-12 bg-ghanor-yellow-700 rounded px-4 text-ghanor-neutral-200 outline-none pt-3"
                onFocus={handleFocus}
                {...register}
                autoComplete="on"
            />
            <span className="text-[12px] text-ghanor-status-warning absolute -bottom-5 left-0">
                {message}
            </span>
        </div>
    );
}
