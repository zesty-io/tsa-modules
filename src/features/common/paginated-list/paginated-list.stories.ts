import { Meta, StoryObj } from '@storybook/html';
import { PaginatedList, PaginatedListModule } from './paginated-list';

const meta = {
  title: 'Features/Common/Paginated List',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  render: (args) => PaginatedList(args),
  argTypes: {}
} satisfies Meta<PaginatedListModule>;

export default meta;
type Story = StoryObj<PaginatedListModule>;

export const Example: Story = {
  args: {
    title: 'Upcoming Events'
  }
};
