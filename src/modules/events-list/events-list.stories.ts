import { Meta, StoryObj } from '@storybook/html';
import {TSAEventsList, TSAEventsListProps} from './events-list';

const meta = {
  title: 'Modules/Events List',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  render: (args) => TSAEventsList(args),
  argTypes: {
    
  }
} satisfies Meta<TSAEventsListProps>;

export default meta;
type Story = StoryObj<TSAEventsListProps>;

export const Example: Story = {
  args: {
    title: 'Upcoming Events'
  }
};