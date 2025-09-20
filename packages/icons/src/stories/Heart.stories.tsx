import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { HeartIcon } from '../HeartIcon';

const meta: Meta<typeof HeartIcon> = {
    title: 'Icons/Heart',
    component: HeartIcon,
    argTypes: {
        size: { control: 'number' },
        color: { control: 'color' },
        strokeWidth: { control: 'number' },
        variant: {
            control: {
                type: 'radio',
                options: ['outlined', 'filled'],
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof HeartIcon>;

export const Outlined: Story = {
    args: {
        size: 24,
        color: "#FF0000",
        strokeWidth: 2,
        variant: 'outlined',
    },
};

export const Filled: Story = {
    args: {
        size: 24,
        color: "#FF0000",
        strokeWidth: 2,
        variant: 'filled',
    },
};
