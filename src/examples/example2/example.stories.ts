import { Meta, StoryObj } from '@storybook/html';
import { Example2 } from './example2';

const meta = {
  title: 'Examples/Card',
  render: () => Example2(),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Card2: StoryObj = {
  args: {}
};
