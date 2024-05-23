import { Meta, StoryObj } from '@storybook/html';
import { VolunteerForm } from './volunteer-form';

const meta = {
  title: 'Modules/Volunteer Form',
  parameters: {
    layout: ['fullscreen']
  },
  render: () => VolunteerForm(),
  tags: ['autodocs']
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
  args: {}
};
