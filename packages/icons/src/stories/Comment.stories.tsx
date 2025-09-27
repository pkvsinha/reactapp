import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { CommentIcon } from '../CommentIcon';

const meta: Meta<typeof CommentIcon> = {
    title: 'Icons/Comment',
    component: CommentIcon,
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
type Story = StoryObj<typeof CommentIcon>;

export const Outlined: Story = {
    args: {
        size: 24,
        color: "#4A90E2",
        strokeWidth: 2,
        variant: 'outlined',
    },
};

export const Filled: Story = {
    args: {
        size: 24,
        color: "#4A90E2",
        strokeWidth: 2,
        variant: 'filled',
    },
};
