import { Meta, StoryObj } from '@storybook/html';
import { StatImageCard, StatImageCardProps } from './stats-image-card';

const meta = {
  title: 'Modules/Stat Image Card',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => StatImageCard(args)
} satisfies Meta<StatImageCardProps>;

export default meta;

type Story = StoryObj<StatImageCardProps>;

export const Example: Story = {
  args: {
    title: '[FPO] 1,000,000 Meals Served',
    content:
      'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut',
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png'
  }
};
