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
      options: ['primary', 'secondary', 'dark'],
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

export const Dark: Story = {
  args: {
    label: 'Button',
    variant: 'dark'
  }
};
