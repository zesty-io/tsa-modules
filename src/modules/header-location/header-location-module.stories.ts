import { Meta, StoryObj } from '@storybook/html';
import { HeaderLocation, HeaderLocationProps } from './header-location-module';

const meta = {
  title: 'Modules/Header Location',
  tags: ['autodocs'],
  render: (args) => HeaderLocation(args)
} satisfies Meta<HeaderLocationProps>;

export default meta;

type Story = StoryObj<HeaderLocationProps>;

export const Example: Story = {
  args: {
    title: 'Salvation Army National',
    subtitle: 'Find my Local Salvation Army'
  }
};
