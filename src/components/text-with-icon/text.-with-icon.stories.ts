import { Meta, StoryObj } from '@storybook/html';
import { TextWithIcon, TextWithIconProps } from './text-with-icon';

const meta = {
  title: 'Components/Text With Icon',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => TextWithIcon(args)
} satisfies Meta<TextWithIconProps>;

export default meta;

type Story = StoryObj<TextWithIconProps>;

export const Example: Story = {
  args: {
    title: '<p slot="title">[FPO] Title</p>',
    icon: '<i slot="icon" class="bi bi-image"></i>'
  }
};
