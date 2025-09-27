import * as React from 'react';

type NotificationIconProps = {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
    showBadge?: boolean;
    badgeColor?: string;
    variant?: 'outlined' | 'filled';
};

export function NotificationIcon({
    size = 24,
    color = "#4A90E2",
    strokeWidth = 2,
    showBadge = false,
    badgeColor = "#FF4C4C",
    variant = 'outlined',
}: NotificationIconProps) {
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
                    {/* Outlined Bell */}
                    <path
                        d="M18 8C18 5.23858 15.7614 3 13 3H11C8.23858 3 6 5.23858 6 8V14L4 16V17H20V16L18 14V8Z"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 21C13.1046 21 14 20.1046 14 19H10C10 20.1046 10.8954 21 12 21Z"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </>
            ) : (
                <>
                    {/* Filled Bell */}
                    <path
                        d="M18 8C18 5.23858 15.7614 3 13 3H11C8.23858 3 6 5.23858 6 8V14L4 16V17H20V16L18 14V8Z"
                        fill={color}
                    />
                    <path
                        d="M12 21C13.1046 21 14 20.1046 14 19H10C10 20.1046 10.8954 21 12 21Z"
                        fill={color}
                    />
                </>
            )}

            {/* Badge dot */}
            {showBadge && (
                <circle
                    cx="18"
                    cy="6"
                    r="3"
                    fill={badgeColor}
                />
            )}
        </svg>
    );
}
