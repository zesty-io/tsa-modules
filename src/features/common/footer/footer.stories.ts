import type { Meta, StoryObj } from "@storybook/html";
import { Footer } from "./footer";

const meta = {
	title: "Features/Common/Footer",
	render: () => Footer(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};
