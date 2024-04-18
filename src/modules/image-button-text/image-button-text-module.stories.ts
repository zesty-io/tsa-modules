import { Meta, StoryObj } from '@storybook/html';
import { ImageButtonText, ImageButtonTextProps } from './image-button-text-module';

const meta = {
  title: 'Modules/Image Button Text',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => ImageButtonText(args),
  argTypes: {
    imagePosition: {
      control: { type: 'select' },
      options: ['middle', 'top', 'bottom'],
      type: 'string',
      defaultValue: { summary: 'middle' }
    }
  }
} satisfies Meta<ImageButtonTextProps>;

export default meta;

type Story = StoryObj<ImageButtonTextProps>;

export const Example: Story = {
  args: {
    title: '[FPO] TITLE',
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    content:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>'
  }
};
