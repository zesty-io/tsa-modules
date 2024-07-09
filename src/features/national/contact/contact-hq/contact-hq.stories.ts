import type { Meta, StoryObj } from "@storybook/html";
import { ContactHQ } from "./contact-hq";

const meta = {
	title: "Features/National/Contact/Contact HQ",
	render: () => ContactHQ(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};
