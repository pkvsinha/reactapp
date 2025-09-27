import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { MicIcon } from '../MicIcon';

const meta: Meta<typeof MicIcon> = {
    title: 'Icons/Mic',
    component: MicIcon,
    argTypes: {
        size: { control: 'number' },
        color: { control: 'color' },
        strokeWidth: { control: 'number' },
    },
};

export default meta;
type Story = StoryObj<typeof MicIcon>;

export const Default: Story = {
    args: {
        size: 24,
        color: "#4A90E2",
     
    },
};
