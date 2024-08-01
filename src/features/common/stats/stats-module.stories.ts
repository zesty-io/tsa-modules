import type { Meta, StoryObj } from "@storybook/html";
import { Stats, type StatsProps } from "./stats-module";

const meta = {
	title: "Features/Common/Stats",
	tags: ["autodocs"],
	render: (args) => Stats(args),
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<StatsProps>;

export default meta;

type Story = StoryObj<StatsProps>;

export const Example: Story = {
	args: {
		title: "[FPO] STATS",
	},
};
