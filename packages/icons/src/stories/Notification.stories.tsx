// Notification.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationIcon } from '../NotificationIcon';

const meta: Meta<typeof NotificationIcon> = {
  title: 'Icons/Notification',
  component: NotificationIcon,
  argTypes: {
    size: { control: 'number' },
    color: { control: 'color' },
    strokeWidth: { control: 'number' },
    showBadge: { control: 'boolean' },
    badgeColor: { control: 'color' },
    variant: {
      control: {
        type: 'radio',
        options: ['outlined', 'filled'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationIcon>;

export const Outlined: Story = {
  args: {
    size: 24,
    color: "#4A90E2",
    strokeWidth: 2,
    showBadge: false,
    badgeColor: "#FF4C4C",
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    size: 24,
    color: "#4A90E2",
    strokeWidth: 2,
    showBadge: true,
    badgeColor: "#FF4C4C",
    variant: 'filled',
  },
};
