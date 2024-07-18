import { Meta, StoryObj } from '@storybook/html';
import { TSAServicesProps, TSAServices } from './services-list';

const meta = {
  title: 'Modules/ServicesList',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  render: (args) => TSAServices(args),
  argTypes: {
    
  }
} satisfies Meta<TSAServicesProps>;

export default meta;
type Story = StoryObj<TSAServicesProps>;

const servicesArr = [
  {
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    title: '[FPO] Service 1',
    href: '#',
  },
  {
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    title: '[FPO] Service 2',
    href: '#',
  },
  {
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    title: '[FPO] Service 3',
    href: '#',
  },
  {
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    title: '[FPO] Service 4',
    href: '#',
  },
  {
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    title: '[FPO] Service 5',
    href: '#',
  },
  {
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    title: '[FPO] Service 6',
    href: '#',
  },
  {
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    title: '[FPO] Service 7',
    href: '#',
  },
  {
    imageUrl: 'https://mgfrnv8q.media.zestyio.com/Vector.png',
    title: '[FPO] Service 8',
    href: '#',
  },
];
const servicesJSON = JSON.stringify(servicesArr);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    services: servicesJSON,
  }
};
