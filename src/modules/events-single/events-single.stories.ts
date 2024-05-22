import { Meta, StoryObj } from '@storybook/html';
import {TSAEventsSingle, TSAEventsSingleProps} from '../events-single/events-single';

const meta = {
  title: 'Modules/Events Single',
  parameters: {
    layout: 'fullwidth'
  },
  tags: ['autodocs'],
  render: (args) => TSAEventsSingle(args),
  argTypes: {
    
  }
} satisfies Meta<TSAEventsSingleProps>;

export default meta;
type Story = StoryObj<TSAEventsSingleProps>;

export const Example: Story = {
  args: {
    imageURL: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    heading: 'Event Title',
    link: '#',
    date: 'April 26, 2024; 10 AM - 10 PM',
    content: '36 Eastern Ave, Augusta, ME 04330',
  }
};