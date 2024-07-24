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
		color: {
			control: { type: "select" },
			options: [
				"primary",
				"primary-light",
				"primary-lighter",
				"blue",
				"blue-light",
				"blue-dark",
				"success",
				"danger",
				"info",
				"warning",
				"green",
				"gray",
				"gray-dark",
				"gray-medium",
				"gray-light",
				"gray-lighter",
				"dark",
				"light",
				"secondary-lighter",
			],
			type: "string",
			defaultValue: { summary: "primary" },
		},
		// textColor: {
		// 	control: { type: "select" },
		// 	options: [
		// 		"primary",
		// 		"primary-light",
		// 		"primary-lighter",
		// 		"blue",
		// 		"blue-light",
		// 		"blue-dark",
		// 		"success",
		// 		"danger",
		// 		"info",
		// 		"warning",
		// 		"green",
		// 		"gray",
		// 		"gray-dark",
		// 		"gray-medium",
		// 		"gray-light",
		// 		"gray-lighter",
		// 		"dark",
		// 		"light",
		// 		"secondary-lighter",
		// 	],
		// 	type: "string",
		// 	defaultValue: { summary: "light" },
		// },
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
		onClick: { action: "onClick", type: "function" },
	},
	render: (args) => Button(args),
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		label: "Button",
		color: "primary",
	},
};

export const PrimaryLight: Story = {
	args: {
		label: "Button",
		color: "primary-light",
	},
};

export const PrimaryLighter: Story = {
	args: {
		label: "Button",
		color: "primary-lighter",
	},
};

export const Blue: Story = {
	args: {
		label: "Button",
		color: "blue",
	},
};

export const BlueLight: Story = {
	args: {
		label: "Button",
		color: "blue-light",
	},
};

export const BlueDark: Story = {
	args: {
		label: "Button",
		color: "blue-dark",
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

export const Green: Story = {
	args: {
		label: "Button",
		color: "green",
	},
};

export const Gray: Story = {
	args: {
		label: "Button",
		color: "gray",
	},
};

export const GrayDark: Story = {
	args: {
		label: "Button",
		color: "gray-dark",
	},
};

export const GrayMedium: Story = {
	args: {
		label: "Button",
		color: "gray-medium",
	},
};

export const GrayLight: Story = {
	args: {
		label: "Button",
		color: "gray-light",
		textColor: "dark",
	},
};

export const GrayLighter: Story = {
	args: {
		label: "Button",
		color: "gray-lighter",
		textColor: "dark",
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
		textColor: "dark",
	},
};

export const SecondaryLighter: Story = {
	args: {
		label: "Button",
		color: "secondary-lighter",
		textColor: "dark",
	},
};
