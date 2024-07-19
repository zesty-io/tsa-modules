import { Meta, StoryObj } from '@storybook/html';
import { HeroText, HeroTextProps } from './hero-text-module';

const meta = {
  title: 'Modules/Hero Text',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  render: (args) => HeroText(args),
  argTypes: {}
} satisfies Meta<HeroTextProps>;

export default meta;
type Story = StoryObj<HeroTextProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    heading: 'PR Contact'
  }
};
