import * as React from 'react';

type AccountIconProps = {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    variant?: 'outlined' | 'filled';
};

export function AccountIcon({
    size = 24,
    color = "#4A90E2",
    strokeWidth = 2,
    variant = 'outlined',
}: AccountIconProps) {
    return (
        <svg 
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {variant === 'outlined' ? (
                <>
                    {/* Head */}
                    <circle
                        cx="12"
                        cy="8"
                        r="4"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                    {/* Body */}
                    <path
                        d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </>
            ) : (
                <>
                    {/* Filled Head */}
                    <circle
                        cx="12"
                        cy="8"
                        r="4"
                        fill={color}
                    />
                    {/* Filled Body */}
                    <path
                        d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20"
                        fill={color}
                    />
                </>
            )}
        </svg>
    );
}
