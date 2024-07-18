import { Meta, StoryObj } from '@storybook/html';
import { ImageText, ImageTextProps } from './image-text';

const meta = {
  title: 'Features/Common/Image Text (Left Image)',

  parameters: {
    layout: ['fullscreen']
  },
  render: (args) => ImageText(args),
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
