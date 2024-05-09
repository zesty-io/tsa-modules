import { Meta, StoryObj } from '@storybook/html';
import {TSAStoriesCarousel, TSAStoriesCarouselProps} from './stories-carousel'

const meta = {
  title: 'Modules/StoriesCarousel',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (args) => TSAStoriesCarousel(args),
  argTypes: {
    
  }
} satisfies Meta<TSAStoriesCarouselProps>;

export default meta;
type Story = StoryObj<TSAStoriesCarouselProps>;
const date = new Date()

export const Example: Story = {
  args: {
    imageURL: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    heading: '[FPO] Title',
    link: '#',
    date: date.toString(),
    content: 'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut',
  }
};