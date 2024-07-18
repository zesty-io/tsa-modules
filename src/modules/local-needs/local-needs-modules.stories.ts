import { Meta, StoryObj } from '@storybook/html';
import { LocalNeedsProps, LocalNeeds } from './local-needs-module';

const meta = {
  title: 'Modules/Local Needs',
  parameters: {
    layout: 'fullscreen'
  },
  render: (args) => LocalNeeds(args),
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<LocalNeedsProps>;

export default meta;

type Story = StoryObj<LocalNeedsProps>;

export const Example: Story = {
  args: {
    title: '[FPO] How we Meet Local Needs',
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png'
  }
};
