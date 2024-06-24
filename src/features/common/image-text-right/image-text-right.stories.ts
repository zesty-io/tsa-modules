import { Meta, StoryObj } from '@storybook/html';
import { ImageTextRight } from './image-text-right';
import { ImageTextProps } from '../image-text/image-text';

const meta = {
  title: 'Features/Common/Image Text (Right Image)',

  parameters: {
    layout: ['fullscreen']
  },
  render: (args) => ImageTextRight(args),
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
