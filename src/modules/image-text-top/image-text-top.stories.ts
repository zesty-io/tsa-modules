import { Meta, StoryObj } from '@storybook/html';
import { ImageTextTop } from './image-text-top';
import { ImageTextProps } from '../image-text/image-text';

const meta = {
  title: 'Modules/Image Text (Top Image)',

  parameters: {
    layout: ['centered']
  },
  render: (args) => ImageTextTop(args),
  tags: ['autodocs']
} satisfies Meta<ImageTextProps>;

export default meta;

type Story = StoryObj<ImageTextProps>;

export const Example: Story = {
  args: {
    image: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    alt: 'Placeholder image'
  }
};
