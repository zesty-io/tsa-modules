import { Meta, StoryObj } from '@storybook/html';
import { Example3 } from './example3';

const meta = {
  title: 'Examples/Card',
  render: () => Example3(),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Card3: StoryObj = {
  args: {}
};
