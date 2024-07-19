import { Meta, StoryObj } from '@storybook/html';
import { Text, TextProps } from './text';

const meta = {
  title: 'Components/Text',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => Text(args)
} satisfies Meta<TextProps>;

export default meta;

type Story = StoryObj<TextProps>;

export const Example: Story = {
  args: {
    content:
      'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut'
  }
};
