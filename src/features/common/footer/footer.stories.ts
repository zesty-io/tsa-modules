import type { Meta, StoryObj } from "@storybook/html";
import { Footer, type FooterProps } from "./footer";

const meta = {
	title: "Features/Common/Footer",
	parameters: {
		layout: "fullscreen",
	},
	render: (args) => Footer(args),
	tags: ["autodocs"],
} satisfies Meta<FooterProps>;

export default meta;

type Story = StoryObj<FooterProps>;

export const Example: Story = {
	args: {
		statement:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut",
		socialLinks: [
			{
				icon: "https://mgfrnv8q.media.zestyio.com/ic_baseline-facebook.png",
				url: "https://www.facebook.com",
			},
			{
				icon: "https://mgfrnv8q.media.zestyio.com/mdi_twitter.png",
				url: "https://www.x.com",
			},
			{
				icon: "https://mgfrnv8q.media.zestyio.com/mdi_youtube.png",
				url: "https://www.youtube.com",
			},
			{
				icon: "https://mgfrnv8q.media.zestyio.com/mdi_instagram.png",
				url: "https://www.instagram.com",
			},
			{
				icon: "https://mgfrnv8q.media.zestyio.com/mdi_linkedin.png",
				url: "https://www.linkedin.com",
			},
		],
		navigationLinks: [
			{
				url: "#",
				name: "Home",
			},
			{
				url: "#",
				name: "About Us",
			},
			{
				url: "#",
				name: "Locations",
			},
			{
				url: "#",
				name: "Services",
			},
			{
				url: "#",
				name: "Newsroom",
			},
			{
				url: "#",
				name: "Ways To Give",
			},
			{
				url: "#",
				name: "Employment Opportunities",
			},
			{
				url: "#",
				name: "Volunteer",
			},
			{
				url: "#",
				name: "Accessibility",
			},
			{
				url: "#",
				name: "Affiliate Links",
			},
		],
	},
};
