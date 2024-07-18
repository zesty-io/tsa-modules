import type { Meta, StoryObj } from "@storybook/html";
import { AnnualReport } from "./annual-report";

const meta = {
	title: "Features/Territories/SASWO/Annual Reports",

	render: () => AnnualReport(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};
