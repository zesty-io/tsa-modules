import { Meta, StoryObj } from '@storybook/html';
import { TSAServiceItem, ServiceItemProps } from './service-item';

const meta = {
  title: 'Modules/ServiceItem',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  render: (args) => TSAServiceItem(args),
  argTypes: {
    
  }
} satisfies Meta<ServiceItemProps>;

export default meta;
type Story = StoryObj<ServiceItemProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    serviceTitle: '[FPO] Service 1',
    href: '#',
  }
};
