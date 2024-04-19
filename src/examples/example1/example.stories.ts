import { Meta, StoryObj } from '@storybook/html';
import { Example } from './example';

const meta = {
  title: 'Examples/Card',
  render: () => Example(),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Card: StoryObj = {
  args: {}
};
