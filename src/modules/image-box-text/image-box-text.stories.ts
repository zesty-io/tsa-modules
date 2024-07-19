import { Meta, StoryObj } from '@storybook/html';
import {ImageBoxText, ImageBoxTextProps} from './image-box-text';


const meta = {
  title: 'Modules/Image Text Box',

  parameters: {
    layout: ['centered']
  },
  render: (args) => ImageBoxText(args),
  tags: ['autodocs']
} satisfies Meta<ImageBoxTextProps>;

export default meta;

type Story = StoryObj<ImageBoxTextProps>;

export const Example: Story = {
  args: {
    heading: 'SEASONAL',
    imgUrl: 'https://w1w702z1.media.zestyio.com/image-sample-full.jpg',
    subheading: '1-3 sentences explaining what this means. 1-3 sentences explaining what this means. 1-3 sentences explaining what this means'
  }
};
