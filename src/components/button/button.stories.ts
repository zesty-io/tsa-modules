import { Meta, StoryObj } from '@storybook/html';
import { Button, ButtonProps } from './button';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
      type: 'string'
    },
    label: { control: 'text' },
    onClick: { action: 'onClick', type: 'function' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'success', 'danger', 'info', 'warning', 'dark', 'light'],
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
    label: 'Button',
    variant: 'primary'
  }
};
export const Success: Story = {
  args: {
    label: 'Button',
    variant: 'success'
  }
};

export const Danger: Story = {
  args: {
    label: 'Button',
    variant: 'danger'
  }
};

export const Info: Story = {
  args: {
    label: 'Button',
    variant: 'info'
  }
};

export const Warning: Story = {
  args: {
    label: 'Button',
    variant: 'warning'
  }
};

export const Light: Story = {
  args: {
    label: 'Button',
    variant: 'light'
  }
};

export const Dark: Story = {
  args: {
    label: 'Button',
    variant: 'dark'
  }
};
