// Home.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { HomeIcon } from '../HomeIcon';

const meta: Meta<typeof HomeIcon> = {
  title: 'Icons/Home',
  component: HomeIcon,
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
type Story = StoryObj<typeof HomeIcon>;

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
