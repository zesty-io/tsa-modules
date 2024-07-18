import type { Meta, StoryObj } from "@storybook/html";
import { ServiceCard } from "./service-card";

const meta = {
	title: "Features/Territories/SASWO/Service Card",
	render: () => ServiceCard(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};
