import { Meta, StoryObj } from '@storybook/html';
import { LocationCard, LocationCardProps } from './location-card-module';

const meta = {
  title: 'Modules/Location Card',
  parameters: {
    layout: 'centered'
  },
  render: (args) => LocationCard(args),
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<LocationCardProps>;

export default meta;

type Story = StoryObj<LocationCardProps>;

export const Example: Story = {
  args: {
    selected: false
  }
};
