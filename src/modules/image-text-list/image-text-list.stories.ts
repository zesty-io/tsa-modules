import { Meta, StoryObj } from '@storybook/html';
import {ImageTextListProps, ImageTextList} from './image-text-list';

const meta = {
  title: 'Modules/Image Text List',

  parameters: {
    layout: ['fullscreen']
  },
  render: (args) => ImageTextList(args),
  tags: ['autodocs']
} satisfies Meta<ImageTextListProps>;

export default meta;

type Story = StoryObj<ImageTextListProps>;

export const Example: Story = {
  args: {
    title: 'Salvation Army Publications'
  }
};
