// src/components/Badges/Badge.tsx
import React from 'react';
import './Badge.css';

export interface BadgeAttribute {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  pill?: boolean;
  dot?: boolean;
  floating?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  children?: React.ReactNode;
}

export const Badge = ({
  variant = 'primary',
  size = 'md',
  rounded = false,
  pill = false,
  dot = false,
  floating = false,
  position = 'top-right',
  className = '',
  children,
}: BadgeAttribute) => {
  const classNames = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    rounded && 'badge--rounded',
    pill && 'badge--pill',
    dot && 'badge--dot',
    floating && 'badge--floating',
    floating && `badge--${position}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classNames}>{!dot && children}</span>;
};
