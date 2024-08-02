import type { Meta, StoryObj } from "@storybook/html";
import { MissionStatement } from "./mission-statement";

const meta = {
	title: "Features/Common/Mission Statement",
	render: () => MissionStatement(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Example: Story = {
	args: {},
};
