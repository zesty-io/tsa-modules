import { Meta, StoryObj } from '@storybook/html';
import {TSAStoriesSingleProps, TSAStoriesSingle} from '../stories-single/stories-single';

const meta = {
  title: 'Modules/StoriesSingle',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (args) => TSAStoriesSingle(args),
  argTypes: {
    
  }
} satisfies Meta<TSAStoriesSingleProps>;

export default meta;
type Story = StoryObj<TSAStoriesSingleProps>;
const date = new Date()
export const Example: Story = {
  args: {
    imageURL: 'https://w1w702z1.media.zestyio.com/image-sample-full.jpg',
    heading: '[FPO] Title',
    link: '#',
    date: date.toString(),
    content: 'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut',
  }
};