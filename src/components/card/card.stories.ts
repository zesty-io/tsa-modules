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
          <p>of children in the United States under the age of 18 face food insecurity on a regular basis</p>
        </div>
    `
  }
};
