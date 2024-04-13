import { Meta, StoryObj } from '@storybook/html';
import { Button, ButtonProps } from './button';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick', type: 'function' },
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'danger', 'info', 'warning', 'dark'],
      type: 'string',
      defaultValue: { summary: 'primary' }
    },
    variant: {
      control: { type: 'select' },
      options: ['fill', 'outline'],
      type: 'string',
      defaultValue: { summary: 'primary' }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      type: 'string',
      defaultValue: { summary: 'medium' }
    },
    disabled: { type: 'boolean' }
  },
  render: (args) => Button(args)
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Button'
  }
};
export const Success: Story = {
  args: {
    label: 'Button',
    color: 'success'
  }
};

export const Danger: Story = {
  args: {
    label: 'Button',
    color: 'danger'
  }
};

export const Info: Story = {
  args: {
    label: 'Button',
    color: 'info'
  }
};

export const Warning: Story = {
  args: {
    label: 'Button',
    color: 'warning'
  }
};

export const Dark: Story = {
  args: {
    label: 'Button',
    color: 'dark'
  }
};
