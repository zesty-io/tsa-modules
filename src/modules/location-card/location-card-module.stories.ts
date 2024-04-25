import { Meta, StoryObj } from '@storybook/html';
import { LocationCard } from './location-card-module';

const meta = {
  title: 'Modules/Location Card',
  parameters: {
    layout: 'centered'
  },
  render: (args) => LocationCard(),
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<any>;

export default meta;

type Story = StoryObj<any>;

export const Example: Story = {
  args: {}
};
