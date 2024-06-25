import { Meta, StoryObj } from '@storybook/html';
import { TextWithIconList, TextWithIconListProps} from './text-with-icon-list';


const meta = {
  title: 'Modules/Text with Icon List',

  parameters: {
    layout: ['fullscreen']
  },
  render: (args) => TextWithIconList(args),
  tags: ['autodocs']
} satisfies Meta<TextWithIconListProps>;

export default meta;

type Story = StoryObj<TextWithIconListProps>;

export const Example: Story = {
  args: {
    heading: '[FPO] What we do'
  }
};
