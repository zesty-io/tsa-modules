import { Meta, StoryObj } from '@storybook/html';
import { Card, CardProps } from './card';

const meta = {
  title: 'Components/Card',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (args) => Card(args)
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj<CardProps>;

export const Example: Story = {
  args: {
    content: `<div class="content">
          <tsa-title>[FPO] Title</tsa-title>
          <tsa-text>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</tsa-text>
        </div>
    `
  }
};
