import type { Meta, StoryObj } from "@storybook/html";
import { WaysToHelp } from "./ways-to-help";

const meta = {
	title: "Features/Territories/SASWO/Ways To Help",
	parameters: {
		layout: "fullscreen",
	},
	render: () => WaysToHelp(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};
