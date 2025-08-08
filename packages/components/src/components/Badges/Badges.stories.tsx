// src/components/Badges/Badge.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./";

const meta = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    position: {
      control: "select",
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
    },
    rounded: { control: "boolean" },
    pill: { control: "boolean" },
    dot: { control: "boolean" },
    floating: { control: "boolean" },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    variant: "danger",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const Rounded: Story = {
  args: {
    children: "Rounded",
    variant: "success",
    rounded: true,
  },
};

export const Pill: Story = {
  args: {
    children: "Pill",
    variant: "secondary",
    pill: true,
  },
};

export const DotOnly: Story = {
  args: {
    dot: true,
    variant: "danger",
  },
};

export const FloatingBadge: Story = {
  render: (args) => (
    <div style={{ position: "relative", width: "40px", height: "40px", background: "#eee", borderRadius: "8px" }}>
      <Badge {...args} />
    </div>
  ),
  args: {
    children: "3",
    variant: "danger",
    size: "sm",
    floating: true,
    position: "top-right",
    pill: true,
  },
};

export const FloatingDot: Story = {
  render: (args) => (
    <div style={{ position: "relative", width: "40px", height: "40px", background: "#eee", borderRadius: "8px" }}>
      <Badge {...args} />
    </div>
  ),
  args: {
    dot: true,
    variant: "danger",
    floating: true,
    position: "top-right",
  },
};

export const Combined: Story = {
  args: {
    children: "Combo Badge",
    variant: "warning",
    size: "lg",
    rounded: true,
    pill: true,
  },
};
