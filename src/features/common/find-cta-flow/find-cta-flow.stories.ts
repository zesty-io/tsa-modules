import type { Meta, StoryObj } from "@storybook/html";

import { FindCTA } from "./find-cta-flow";

const meta = {
	title: "Features/Common/Find CTA",
	parameters: {
		docs: {
			description: {
				component: "TODO: Add desc",
			},
		},
	},
	tags: ["autodocs"],
	render: () => FindCTA(),
} satisfies Meta;

export default meta;

type Story = StoryObj;
export const Example: Story = {};
