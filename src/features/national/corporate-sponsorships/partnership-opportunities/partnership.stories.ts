import type { Meta, StoryObj } from "@storybook/html";
import { PartnershipOpportunities } from "./partnership";

const meta = {
	title: "Features/National/Corporate Partnership/Partnership Opportunities",
	render: () => PartnershipOpportunities(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};
