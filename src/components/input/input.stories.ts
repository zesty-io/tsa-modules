import { Meta, StoryObj } from '@storybook/html';
import { Input, InputProps } from './input';

const meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => Input(args),
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      type: 'string',
      defaultValue: { summary: 'medium' }
    },
    disabled: { type: 'boolean' }
  }
} satisfies Meta<InputProps>;

export default meta;

type Story = StoryObj<InputProps>;

export const Example: Story = {
  args: {
    name: '',
    value: '',
    placeholder: 'Placeholder',
    label: 'Label'
  }
};
