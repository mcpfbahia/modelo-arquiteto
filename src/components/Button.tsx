import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}) => {
    const variants = {
        primary: 'bg-primary text-white hover:bg-black',
        secondary: 'bg-secondary text-white hover:opacity-90',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        whatsapp: 'bg-accent text-white hover:bg-[#128C7E]',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-8 py-4 text-base font-medium tracking-wide uppercase',
        lg: 'px-10 py-5 text-lg font-bold tracking-widest uppercase',
    };

    return (
        <button
            className={cn(
                'transition-all duration-300 active:scale-95 shimmer inline-flex items-center justify-center gap-2',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
