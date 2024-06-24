import { Meta, StoryObj } from '@storybook/html';
import { MoreWaysToGive } from './more-ways-to-give';

const meta = {
  title: 'Features/National/Ways to give/More Ways To Give',
  render: () => MoreWaysToGive(),
  tags: ['autodocs']
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
  args: {}
};
