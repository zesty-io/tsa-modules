import { Meta, StoryObj } from '@storybook/html';
import { MapHeader, MapHeaderProps } from './map-header-module';

const meta = {
  title: 'Modules/Map Header',
  render: (args) => MapHeader(args),
  tags: ['autodocs'],
  parameters: {
    layout: ['centered']
  }
} satisfies Meta<MapHeaderProps>;

export default meta;

type Story = StoryObj<MapHeaderProps>;

export const Example: Story = {
  args: {
    title: 'The Salvation Army Serves in Every Zip Code in America',
    subtitle: 'Find a Salvation Army Near You'
  }
};
