import { Meta, StoryObj } from '@storybook/html';
import { LocalNeed, LocalNeedProps } from './local-need-module';

const meta = {
  title: 'Modules/Local Need',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (args) => LocalNeed(args),
  argTypes: {}
} satisfies Meta<LocalNeedProps>;

export default meta;
type Story = StoryObj<LocalNeedProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    title: '[FPO] Title',
    content:
      'Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut',
    icon: 'image'
  }
};
