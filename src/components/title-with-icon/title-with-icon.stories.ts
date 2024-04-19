import { Meta, StoryObj } from '@storybook/html';
import { TitleWithIcon, TitleWithIconProps } from './title-with-icon';

const meta = {
  title: 'Components/Title With Icon',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => TitleWithIcon(args)
} satisfies Meta<TitleWithIconProps>;

export default meta;

type Story = StoryObj<TitleWithIconProps>;

export const Example: Story = {
  args: {
    title: '[FPO] Title',
    icon: '<i slot="icon" class="bi bi-image"></i>'
  }
};
