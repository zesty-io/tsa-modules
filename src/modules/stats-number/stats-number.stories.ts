import { Meta, StoryObj } from '@storybook/html';
import { StatsNumber, StatsNumberProps } from './stats-number';

const meta = {
  title: 'Modules/StatsNumber',
  parameters: {
    layout: 'fullfullscreen'
  },
  tags: ['autodocs'],
  render: (args) => StatsNumber(args),
  argTypes: {
    heading: { control: 'text' },
  }
} satisfies Meta<StatsNumberProps>;

export default meta;
type Story = StoryObj<StatsNumberProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    heading: '20%',
    content: 'of children in the United States under the age of 18 face food insecurity on a regular basis',
  }
};
