import type { Meta, StoryObj } from "@storybook/html";
import { TeamCard } from "./team-card";

const meta = {
	title: "Features/Territories/SASWO/Team Card",

	render: () => TeamCard(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};
