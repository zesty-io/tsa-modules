import { Meta, StoryObj } from '@storybook/html';
import {ReadMoreCardList, ReadMoreCardListProps} from './read-more-card-list';

const meta = {
  title: 'Modules/Read More Card List',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  render: (args) => ReadMoreCardList(args),
  argTypes: {
    
  }
} satisfies Meta<ReadMoreCardListProps>;

export default meta;
type Story = StoryObj<ReadMoreCardListProps>;

export const Example: Story = {
  args: {
    heading: '[FPO] National Leaders',
  }
};