import { Meta, StoryObj } from '@storybook/html';
import { Switch, SwitchProps } from './switch';

const meta = {
  title: 'Components/Switch',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => Switch(args)
} satisfies Meta<SwitchProps>;

export default meta;

type Story = StoryObj<SwitchProps>;

export const Example: Story = {
  args: {
    labels: 'EN,ES'
  }
};
