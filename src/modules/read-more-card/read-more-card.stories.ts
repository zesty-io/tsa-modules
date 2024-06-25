import { Meta, StoryObj } from '@storybook/html';
import {ReadMoreCard, ReadMoreCardProps} from './read-more-card';

const meta = {
  title: 'Modules/Read More Card',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  render: (args) => ReadMoreCard(args),
  argTypes: {
    
  }
} satisfies Meta<ReadMoreCardProps>;

export default meta;
type Story = StoryObj<ReadMoreCardProps>;

export const Example: Story = {
  args: {
    imgUrl: 'https://w1w702z1.media.zestyio.com/image-sample-full.jpg',
    heading: 'Name/Title',
    link: '#',
    intro: '<p>Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut</p>',
    content: '<p>Longer, yet concise version of the bio written for each entity that is represented by this card. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ultricies mi eget mauris pharetra et ultrices neque ornare. Dui vivamus arcu felis bibendum ut tristique et egestas. Nec ullamcorper sit amet risus nullam.</p>'
  }
};