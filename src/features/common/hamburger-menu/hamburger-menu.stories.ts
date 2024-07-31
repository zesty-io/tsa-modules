import type { Meta, StoryObj } from "@storybook/html";
import { HamburgerMenu } from "./hamburger-menu";

const meta = {
	title: "Features/Common/Hamburger Menu",
	tags: ["autodocs"],
	render: () => HamburgerMenu(),
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Example: Story = {};
