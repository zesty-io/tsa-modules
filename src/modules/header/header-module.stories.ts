import { Meta, StoryObj } from '@storybook/html';
import { Header, HeaderProps } from './header-module';

const meta = {
  title: 'Modules/Header',
  tags: ['autodocs'],
  render: (args) => Header(args)
} satisfies Meta<HeaderProps>;

export default meta;

type Story = StoryObj<HeaderProps>;

export const Example: Story = {
  args: {
    logoUrl: 'https://w1w702z1.media.zestyio.com/image-2.png',
    href: 'http://localhost:6006/?path=/docs/modules-header--docs'
  }
};
