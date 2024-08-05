import type { Meta, StoryObj } from "@storybook/html";
import { StatCard } from "./stat-card";

const meta = {
	title: "Features/Common/Stat Card",

	parameters: {
		layout: ["centered"],
	},
	render: () => StatCard(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Example: Story = {};
