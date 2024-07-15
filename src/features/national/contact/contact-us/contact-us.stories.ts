import type { Meta, StoryObj } from "@storybook/html";
import { ContactUs } from "./contact-us";

const meta = {
	title: "Features/National/Contact/Contact Us",
	render: () => ContactUs(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};
