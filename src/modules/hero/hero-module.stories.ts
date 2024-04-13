import { Meta, StoryObj } from '@storybook/html';
import { Hero, HeroProps } from './hero-module';

const meta = {
  title: 'Modules/Hero',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (args) => Hero(args),
  argTypes: {}
} satisfies Meta<HeroProps>;

export default meta;
type Story = StoryObj<HeroProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Marketing message/ key moments events',
    subtitle: 'Subtitle of the hero goes here',
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png'
  }
};
