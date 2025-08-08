// src/components/Buttons/Button.tsx
import React from 'react';
import './Button.css';

export interface ButtonAttribute {
  variant?: 'primary' | 'secondary' | 'tertiary';
  outlined?: boolean;
  elevated?: boolean;
  disabled?: boolean;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  variant = 'primary',
  outlined = false,
  elevated = false,
  disabled = false,
  label,
  size = 'md',
  className = '',
  onClick,
}:  ButtonAttribute) => {
  const classNames = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    outlined && 'btn--outlined',
    elevated && 'btn--elevated',
    disabled && 'btn--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
