import { Meta, StoryObj } from '@storybook/html';
import { EmploymentModule } from './employment';

const meta = {
  title: 'Modules/Employment',
  render: () => EmploymentModule(),
  parameters: {
    layout: ['fullscreen']
  },
  tags: ['autodocs']
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
  args: {}
};
