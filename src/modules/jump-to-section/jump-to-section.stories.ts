import { Meta, StoryObj } from '@storybook/html';
import { TSAJumpToSectionProps, JumpToSectionModule } from './jump-to-section';


const meta = {
  title: 'Modules/Jump to Section',

  parameters: {
    layout: ['fullscreen']
  },
  render: (args) => JumpToSectionModule(args),
  tags: ['autodocs']
} satisfies Meta<TSAJumpToSectionProps>;

export default meta;

type Story = StoryObj<TSAJumpToSectionProps>;

export const Example: Story = {
  args: {
    heading: '[FPO] Jump to a Section'
  }
};
