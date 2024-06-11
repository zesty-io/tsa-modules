import { Meta, StoryObj } from '@storybook/html';
import { EventSingleDetail, EventsSingleDetailProps } from './event-single-detail';

const meta = {
  title: 'Modules/Events Single Details',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (args) => EventSingleDetail(args),
  argTypes: {
    
  }
} satisfies Meta<EventsSingleDetailProps>;

export default meta;
type Story = StoryObj<EventsSingleDetailProps>;

export const Example: Story = {
  args: {
    lat: '44.310009239940634',
    long: '-69.76798784824034'
  }
};