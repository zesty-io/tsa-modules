import type { Meta, StoryObj } from "@storybook/html";
import { SocialLink, type SocialLinkProps } from "./social-link";

const meta = {
	title: "Components/Social Link",
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	render: (args) => SocialLink(args),
	argTypes: {},
} satisfies Meta<SocialLinkProps>;

export default meta;
type Story = StoryObj<SocialLinkProps>;

export const Example: Story = {
	args: {
		icon: "https://mgfrnv8q.media.zestyio.com/ic_baseline-facebook.png",
		url: "https://www.facebook.com",
	},
};
