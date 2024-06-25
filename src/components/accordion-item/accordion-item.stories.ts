import { Meta, StoryObj } from '@storybook/html';
import {AccordionItem, AccordionItemProps} from './accordion-item';

const meta = {
  title: 'Components/Accordion Item',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => AccordionItem(args),
  argTypes: {
    header: {
      control: { type: 'text' },
      type: 'string',
    }
  }
} satisfies Meta<AccordionItemProps>;

export default meta;

type Story = StoryObj<AccordionItemProps>;

export const Example: Story = {
  args: {
    header: '[FPO] TITLE',
    subtext: '$500,000 - $999,999 Cumulative Giving in Single Year'
  }
};
