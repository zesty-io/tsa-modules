import { Meta, StoryObj } from '@storybook/html';
import {Stories, StoriesProp} from '../stories/stories';

const meta = {
  title: 'Modules/Stories',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  render: (args) => Stories(args),
  argTypes: {
    
  }
} satisfies Meta<StoriesProp>;

export default meta;
type Story = StoryObj<StoriesProp>;

export const Example: Story = {
  args: {
   listTitle: 'Featured Salvation Army Augusta Capital Region Corps Stories',
   listLinkText: 'View All Stories',
   listLink: '#',
  }
};