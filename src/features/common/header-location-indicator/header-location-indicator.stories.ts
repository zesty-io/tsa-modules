import type { Meta, StoryObj } from "@storybook/html";
import {
	type HeaderLocationIndicatorProps,
	HeaderLocationInidicator,
} from "./header-location-indicator";

const meta = {
	title: "Features/Common/Header Location Indicator",
	tags: ["autodocs"],
	render: (args) => HeaderLocationInidicator(args),
} satisfies Meta<HeaderLocationIndicatorProps>;

export default meta;

type Story = StoryObj<HeaderLocationIndicatorProps>;

export const Example: Story = {
	args: {
		location: "Salvation Army Augusta Capital Region Corps",
	},
};
