import type { Meta, StoryObj } from "@storybook/html";
import { HeaderSearch } from "./header-search";

const meta = {
	title: "Features/Common/Header Search",
	parameters: {
		docs: {
			description: {
				component: "This is the header search",
			},
		},
	},
	tags: ["autodocs"],
	render: () => HeaderSearch(),
} satisfies Meta;

export default meta;

type Story = StoryObj;
export const Example: Story = {};
