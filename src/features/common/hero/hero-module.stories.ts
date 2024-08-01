import type { Meta, StoryObj } from "@storybook/html";
import { Hero, type HeroProps } from "./hero-module";

const meta = {
	title: "Features/Common/Hero",
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	render: (args) => Hero(args),
	argTypes: {},
} satisfies Meta<HeroProps>;

export default meta;
type Story = StoryObj<HeroProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
	args: {
		title: "Marketing Message/Key Moments/Events",
		subtitle: "Subtitle of the hero goes here",
		imageUrl: "https://mgfrnv8q.media.zestyio.com/Vector.png",
	},
};
