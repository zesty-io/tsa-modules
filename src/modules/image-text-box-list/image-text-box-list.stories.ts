import { Meta, StoryObj } from '@storybook/html';
import { ImageTextBoxList, ImageTextBoxListProps } from './image-text-box-list';


const meta = {
  title: 'Modules/Image Text Box List',

  parameters: {
    layout: ['fullscreen']
  },
  render: (args) => ImageTextBoxList(args),
  tags: ['autodocs']
} satisfies Meta<ImageTextBoxListProps>;

export default meta;

type Story = StoryObj<ImageTextBoxListProps>;

export const Example: Story = {
  args: {
    heading: '[FPO] partnership opportunities',
    subheading: 'Lorem ipsum dolor sit amet, consectur adipscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.'
  }
};
