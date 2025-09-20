import * as React from 'react';

type SearchIconProps = {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
};

export function SearchIcon({
    size = 24,
    color = "#4A90E2",
    strokeWidth = 2,
}: SearchIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Lens */}
            <circle
                cx="11"
                cy="11"
                r="7"
                stroke={color}
                strokeWidth={strokeWidth}
            />
            {/* Handle */}
            <line
                x1="16.65"
                y1="16.65"
                x2="21"
                y2="21"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
}
