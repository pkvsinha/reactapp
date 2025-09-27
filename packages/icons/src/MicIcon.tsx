import * as React from 'react';

type MicIconProps = {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
};

export function MicIcon({
    size = 24,
    color = "#4A90E2",
    strokeWidth = 2,
}: MicIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Mic capsule */}
            <rect
                x="9"
                y="3"
                width="6"
                height="12"
                rx="3"
                stroke={color}
                strokeWidth={strokeWidth}
            />
            {/* Stem */}
            <path
                d="M5 11v1a7 7 0 0 0 14 0v-1"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
            {/* Base line */}
            <line
                x1="12"
                y1="19"
                x2="12"
                y2="22"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
}
