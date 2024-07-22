import type { Meta, StoryObj } from "@storybook/html";
import { Button, type ButtonProps } from "./button";

const meta = {
	title: "Components/Button",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},

	argTypes: {
		label: { control: "text" },
		onClick: { action: "onClick", type: "function" },
		color: {
			control: { type: "select" },
			options: [
				"primary",
				"success",
				"danger",
				"info",
				"warning",
				"dark",
				"light",
				"secondary",
			],
			type: "string",
			defaultValue: { summary: "primary" },
		},
		outline: {
			control: { type: "boolean" },
		},
		size: {
			control: { type: "select" },
			options: ["sm", "lg"],
			type: "string",
			defaultValue: { summary: "sm" },
		},
		disabled: { type: "boolean" },
		block: { type: "boolean" },
	},
	render: (args) => Button(args),
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		label: "Button",
	},
};
export const Success: Story = {
	args: {
		label: "Button",
		color: "success",
	},
};

export const Danger: Story = {
	args: {
		label: "Button",
		color: "danger",
	},
};

export const Info: Story = {
	args: {
		label: "Button",
		color: "info",
	},
};

export const Warning: Story = {
	args: {
		label: "Button",
		color: "warning",
	},
};

export const Dark: Story = {
	args: {
		label: "Button",
		color: "dark",
	},
};

export const Light: Story = {
	args: {
		label: "Button",
		color: "light",
	},
};

export const Secondary: Story = {
	args: {
		label: "Button",
		color: "secondary",
	},
};
