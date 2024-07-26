import type { Meta, StoryObj } from "@storybook/html";
import { TeamPreview } from './sawso-team-preview';

const meta = {
	title: "Features/Territories/SASWO/Team Preview",

	render: () => TeamPreview(),
	tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Example: StoryObj = {
	args: {},
};