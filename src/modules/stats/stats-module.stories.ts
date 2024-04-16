import { Meta, StoryObj } from '@storybook/html';
import { Stats, StatsProps } from './stats-module';

const meta = {
  title: 'Modules/Stats',
  tags: ['autodocs'],
  render: (args) => Stats(args),
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<StatsProps>;

export default meta;

type Story = StoryObj<StatsProps>;

export const Example: Story = {
  args: {
    title: '[FPO] STATS'
  }
};

export const ExampleImageCard: Story = {
  args: {
    title: '[FPO] STATS',
    imageCard: true
  }
};
