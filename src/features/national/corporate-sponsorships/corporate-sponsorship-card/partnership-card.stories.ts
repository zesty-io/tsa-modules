import type { Meta, StoryObj } from "@storybook/html";
import { PartnershipOpportunitiesCard } from "./partnership-card";

const meta = {
	title:
		"Features/National/Corporate Partnership/Partnership Opportunities Card",
	render: () => PartnershipOpportunitiesCard(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};
