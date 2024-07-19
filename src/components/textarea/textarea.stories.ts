import { Meta, StoryObj } from '@storybook/html';
import { Textarea, TextareaProps } from './textarea';

const meta = {
  title: 'Components/Textarea',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => Textarea(args),
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
} satisfies Meta<TextareaProps>;

export default meta;

type Story = StoryObj<TextareaProps>;

export const Example: Story = {
  args: {
    name: '',
    value: '',
    placeholder: 'Placeholder',
    label: 'Label'
  }
};
