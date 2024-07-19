import { Meta, StoryObj } from '@storybook/html';
import {NewsArchiveHeader, NewsArchiveHeaderProps} from './news-archive-header';

const meta = {
  title: 'Modules/News Archive Header',
  tags: ['autodocs'],
  render: (args) => NewsArchiveHeader(args)
} satisfies Meta<NewsArchiveHeaderProps>;

export default meta;

type Story = StoryObj<NewsArchiveHeaderProps>;

export const Example: Story = {
  args: {
    heading: 'All Salvation Army News'
  }
};
