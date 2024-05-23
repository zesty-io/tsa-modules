import { Meta, StoryObj } from '@storybook/html';
import { VolunteerJobs } from './volunteer-jobs';

const meta = {
  title: 'Modules/Volunteer Jobs',
  render: () => VolunteerJobs(),
  parameters: {
    layout: ['fullscreen']
  },
  tags: ['autodocs']
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
  args: {}
};
