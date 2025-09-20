import * as React from 'react';

type ThumbsUpIconProps = {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    variant?: 'outlined' | 'filled';
};

export function ThumbsUpIcon({
    size = 24,
    color = "#4A90E2",
    strokeWidth = 2,
    variant = 'outlined',
}: ThumbsUpIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {variant === 'outlined' ? (
                <path
                    d="M2 21H6C6.55 21 7 20.55 7 20V10C7 9.45 6.55 9 6 9H2V21ZM22 10C22 8.9 21.1 8 20 8H14.69L15.64 4.35C15.73 4.02 15.67 3.67 15.47 3.39C15.17 2.96 14.56 2.85 14.12 3.15L9 7H7V20C7 21.1 7.9 22 9 22H18C18.74 22 19.38 21.6 19.73 21.01L21.89 17.14C21.96 17.01 22 16.86 22 16.7V10Z"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            ) : (
                <path
                    d="M2 21H6C6.55 21 7 20.55 7 20V10C7 9.45 6.55 9 6 9H2V21ZM22 10C22 8.9 21.1 8 20 8H14.69L15.64 4.35C15.73 4.02 15.67 3.67 15.47 3.39C15.17 2.96 14.56 2.85 14.12 3.15L9 7H7V20C7 21.1 7.9 22 9 22H18C18.74 22 19.38 21.6 19.73 21.01L21.89 17.14C21.96 17.01 22 16.86 22 16.7V10Z"
                    fill={color}
                />
            )}
        </svg>
    );
}
