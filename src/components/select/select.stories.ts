import type { Meta, StoryObj } from "@storybook/html";
import { Select, type SelectProps } from "./select";

const meta = {
	title: "Components/Select",
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	render: (args) => Select(args),
	argTypes: {},
} satisfies Meta<SelectProps>;

export default meta;
type Story = StoryObj<SelectProps>;

const optionsArr = [
	{
		label: "[FPO] Homeless Shelter 1",
		value: "1",
	},
	{
		label: "[FPO] Homeless Shelter 2",
		value: "2",
	},
];
const optiosnJSON = JSON.stringify(optionsArr);
export const Example: Story = {
	args: {
		options: optiosnJSON,
		label: "Example Select",
		placeholder: "Select ",
	},
};
