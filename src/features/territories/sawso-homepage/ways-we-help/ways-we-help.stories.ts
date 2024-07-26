import type { Meta, StoryObj } from "@storybook/html";
import { WaysToHelp } from './ways-we-help';

const meta = {
	title: "Features/Territories/SASWO/Ways We Help",

	render: () => WaysToHelp(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};