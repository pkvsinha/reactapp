import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { SearchIcon } from '../SearchIcon';

const meta: Meta<typeof SearchIcon> = {
    title: 'Icons/Search',
    component: SearchIcon,
    argTypes: {
        size: { control: 'number' },
        color: { control: 'color' },
        strokeWidth: { control: 'number' },
    },
};

export default meta;
type Story = StoryObj<typeof SearchIcon>;

export const Default: Story = {
    args: {
        size: 48,
        color: "#4A90E2",
        strokeWidth: 2,
    },
};
