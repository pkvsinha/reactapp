// src/components/Buttons/Button.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './';
import {fn} from 'storybook/test'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;


export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary',
    variant: 'tertiary',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    variant: 'primary',
    outlined: true,
  },
};

export const Elevated: Story = {
  args: {
    label: 'Elevated',
    variant: 'primary',
    elevated: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'primary',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
  },
};

export const Combined: Story = {
  args: {
    label: 'Combo',
    variant: 'secondary',
    size: 'lg',
    outlined: true,
    elevated: true,
    onClick: () => alert('Combo clicked'),
  },
};
