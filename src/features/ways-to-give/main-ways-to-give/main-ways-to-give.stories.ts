import type { Meta, StoryObj } from "@storybook/html";
import { MainWaysToGive } from "./main-ways-to-give";

const meta = {
	title: "Features/National/Ways to give/Main ways to give",
	parameters: {
		layout: "fullscreen",
	},
	render: () => MainWaysToGive(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};
