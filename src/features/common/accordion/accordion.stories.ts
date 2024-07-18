import { Meta, StoryObj } from '@storybook/html';
import { Accordion, AccordionProps } from './accordion';

const meta = {
  title: 'Features/Common/Accordion',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => Accordion(args),
  argTypes: {
    title: {
      control: { type: 'text' },
      type: 'string'
    }
  }
} satisfies Meta<AccordionProps>;

export default meta;

type Story = StoryObj<AccordionProps>;

export const Example: Story = {
  args: {
    title: 'Accordion Module'
  }
};
