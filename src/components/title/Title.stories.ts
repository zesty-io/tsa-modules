import { Meta, StoryObj } from '@storybook/html';
import { Title, TitleProps } from './Title';

const meta = {
  title: 'Components/Title',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => Title(args)
} satisfies Meta<TitleProps>;

export default meta;

type Story = StoryObj<TitleProps>;

export const Example: Story = {
  args: {
    title: '[FPO] Title'
  }
};
