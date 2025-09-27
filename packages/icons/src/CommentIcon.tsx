import * as React from 'react';

type CommentIconProps = {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    variant?: 'outlined' | 'filled';
};

export function CommentIcon({
    size = 24,
    color = "#4A90E2",
    strokeWidth = 2,
    variant = 'outlined',
}: CommentIconProps) {
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
                    d="M21 15C21 16.6569 19.6569 18 18 18H8L3 22V4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V15Z"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            ) : (
                <path
                    d="M21 15C21 16.6569 19.6569 18 18 18H8L3 22V4C3 2.34315 4.34315 1 6 1H18C19.6569 1 21 2.34315 21 4V15Z"
                    fill={color}
                />
            )}
        </svg>
    );
}
