import { Meta, StoryObj } from '@storybook/html';
import { SearchBar, SearchBarProps } from './search-bar-module';

const meta = {
  title: 'Modules/SearchBar',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (args) => SearchBar(args),
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      type: 'string',
      defaultValue: { summary: 'medium' }
    },
    disabled: { type: 'boolean' }
  }
} satisfies Meta<SearchBarProps>;

export default meta;
type Story = StoryObj<SearchBarProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    name: '',
    value: '',
    placeholder: '“Food pantry”',
    label: '[FPO] What are you looking for?',
    buttonText: 'Search',
    onClick: () => alert('clicked')
  }
};
