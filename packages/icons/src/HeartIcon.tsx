import * as React from 'react';

type LikeIconProps = {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    variant?: 'outlined' | 'filled';
};

export function HeartIcon({
    size = 24,
    color = "#FF0000",
    strokeWidth = 2,
    variant = 'outlined',
}: LikeIconProps) {
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
                    d="M12 21C12 21 4 13.5 4 8.5C4 5.46243 6.46243 3 9.5 3C11.24 3 12.91 4.01 13.5 5.45C14.09 4.01 15.76 3 17.5 3C20.5376 3 23 5.46243 23 8.5C23 13.5 15 21 15 21H12Z"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            ) : (
                <path
                    d="M12 21C12 21 4 13.5 4 8.5C4 5.46243 6.46243 3 9.5 3C11.24 3 12.91 4.01 13.5 5.45C14.09 4.01 15.76 3 17.5 3C20.5376 3 23 5.46243 23 8.5C23 13.5 15 21 15 21H12Z"
                    fill={color}
                />
            )}
        </svg>
    );
}
