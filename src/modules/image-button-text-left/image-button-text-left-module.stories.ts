import { Meta, StoryObj } from '@storybook/html';
import { ImageButtonTextLeft, ImageButtonTextLeftProps } from './image-button-text-left-module';

const meta = {
  title: 'Modules/Image Button Text Left',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => ImageButtonTextLeft(args),
  argTypes: {
    imagePosition: {
      control: { type: 'select' },
      options: ['middle', 'top', 'bottom'],
      type: 'string',
      defaultValue: { summary: 'middle' }
    }
  }
} satisfies Meta<ImageButtonTextLeftProps>;

export default meta;

type Story = StoryObj<ImageButtonTextLeftProps>;

export const Example: Story = {
  args: {
    title: '[FPO] TITLE',
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    content:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>'
  }
};
