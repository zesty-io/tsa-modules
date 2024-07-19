import { Meta, StoryObj } from '@storybook/html';
import {TSAOtherEventsList, TSAOtherEventsListProps } from './other-events-list';

const meta = {
  title: 'Modules/Other Events List',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  render: (args) => TSAOtherEventsList(args),
} satisfies Meta<TSAOtherEventsListProps>;

export default meta;
type Story = StoryObj<TSAOtherEventsListProps>;

export const Example: Story = {
  args: {
    heading: 'Other Events',
  }
};