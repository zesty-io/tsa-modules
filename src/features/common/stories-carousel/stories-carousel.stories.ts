import { Meta, StoryObj } from '@storybook/html';
import { TSAStoriesCarousel, TSAStoriesCarouselProps } from './stories-carousel';

const meta = {
  title: 'Features/Common/StoriesCarousel',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (args) => TSAStoriesCarousel(args),
  argTypes: {}
} satisfies Meta<TSAStoriesCarouselProps>;

export default meta;
type Story = StoryObj<TSAStoriesCarouselProps>;
const date = new Date();

export const Example: Story = {
  args: {
    imageURL: 'https://w1w702z1.media.zestyio.com/image-sample-full.jpg',
    heading: '[FPO] Title',
    link: '#',
    date: date.toString(),
    content:
      'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut'
  }
};
