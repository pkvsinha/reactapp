import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { DownloadIcon } from '../DownloadIcon';

const meta: Meta<typeof DownloadIcon> = {
    title: 'Icons/Download',
    component: DownloadIcon,
    argTypes: {
        size: { control: 'number' },
        color: { control: 'color' },
        strokeWidth: { control: 'number' },
    },
};

export default meta;
type Story = StoryObj<typeof DownloadIcon>;

export const Default: Story = {
    args: {
        size: 48,
        color: '#4A90E2',
        strokeWidth: 2,
    },
};
