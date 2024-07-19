import { Meta, StoryObj } from '@storybook/html';
import { EventSingleHeader, EventSingleHeaderProps} from './event-single-header';

const meta = {
  title: 'Modules/Events Single Header',
  tags: ['autodocs'],
  render: (args) => EventSingleHeader(args),
  argTypes: {
    
  }
} satisfies Meta<EventSingleHeaderProps>;

export default meta;
type Story = StoryObj<EventSingleHeaderProps>;

export const Example: Story = {
  args: {
    heading: 'Angel Tree In-Person Registration',
    imageUrl: 'https://w1w702z1.media.zestyio.com/sample-image-full.png'
  }
};