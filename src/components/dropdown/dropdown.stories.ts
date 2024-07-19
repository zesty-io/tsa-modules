import { Meta, StoryObj } from '@storybook/html';
import { DropdownProps, Dropdown } from './dropdown';

const meta = {
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (args) => Dropdown(args)
} satisfies Meta<DropdownProps>;

export default meta;

type Story = StoryObj<DropdownProps>;

export const Example: Story = {
  args: {
    title: 'Dropdown'
  }
};
