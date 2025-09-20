import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { AccountIcon } from '../AccountIcon';

const meta: Meta<typeof AccountIcon> = {
  title: 'Icons/Account',
  component: AccountIcon,
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
type Story = StoryObj<typeof AccountIcon>;

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
