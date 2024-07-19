import { Meta, StoryObj } from '@storybook/html';
import { FindHelpProps, FindHelp } from './find-help-modal';


const meta = {
  title: 'Modules/Find Help Modal',

  parameters: {
    layout: ['centered']
  },
  render: (args) => FindHelp(args),
  tags: ['autodocs']
} satisfies Meta<FindHelpProps>;

export default meta;

type Story = StoryObj<FindHelpProps>;

const optionsArr = [
  {
    label: '[FPO] Homeless Shelter 1',
    value: '1',
  },
  {
    label: '[FPO] Homeless Shelter 2',
    value: '2',
  },
];
const optiosnJSON = JSON.stringify(optionsArr);

console.log(optiosnJSON);
export const Example: Story = {
  args: {
    heading: '[FPO] Find help near you',
    options: optiosnJSON,
  }
};
