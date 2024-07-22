import type { Meta, StoryObj } from "@storybook/html";
import {
	HeaderLocation,
	type HeaderLocationProps,
} from "./header-location-module";

const meta = {
	title: "Features/Common/Header Location",
	tags: ["autodocs"],
	render: (args) => HeaderLocation(args),
} satisfies Meta<HeaderLocationProps>;

export default meta;

type Story = StoryObj<HeaderLocationProps>;

export const Example: Story = {
	args: {
		title: "Salvation Army National",
		location: "Find Thrift Stores",
	},
};
