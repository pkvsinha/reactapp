import * as React from 'react';

type DownloadIconProps = {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
};

export function DownloadIcon({
    size = 24,
    color = "#4A90E2",
    strokeWidth = 2,
}: DownloadIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Downward arrow */}
            <path
                d="M12 3v12"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
            <path
                d="M6 12l6 6 6-6"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Bottom tray */}
            <path
                d="M5 21h14"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
}
