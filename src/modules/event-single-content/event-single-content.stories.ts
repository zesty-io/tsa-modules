import { Meta, StoryObj } from '@storybook/html';
import {EventSingleContent} from './event-single-content';

const meta = {
  title: 'Modules/Events Single Content',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  render: () => EventSingleContent(),
  argTypes: {
    
  }
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Example: Story = {
};