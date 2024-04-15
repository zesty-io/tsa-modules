import { Meta, StoryObj } from '@storybook/html';
import { Lightbox, LightboxProps } from './lightbox-module';

const meta = {
  title: 'Modules/Lightbox',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => Lightbox(args)
} satisfies Meta<LightboxProps>;

export default meta;

type Story = StoryObj<LightboxProps>;

export const Example: Story = {
  args: {
    title: 'Lightbox Title'
  }
};
