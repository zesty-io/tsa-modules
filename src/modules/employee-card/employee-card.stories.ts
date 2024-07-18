import { Meta, StoryObj } from '@storybook/html';
import { EmployeeCard } from './employee-card';

const meta = {
  title: 'Modules/Employee Card',
  parameters: {
    layout: 'centered'
  },
  render: () => EmployeeCard(),
  tags: ['autodocs']
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
  args: {}
};
