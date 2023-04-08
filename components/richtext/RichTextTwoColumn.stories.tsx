import { Meta, StoryObj } from "@storybook/react";
import RichTextTwoColumn from "#/components/richtext/RichTextTwoColumn";

const content: string = `# h1 - Lorem Ipsum Dolor Sit Amet

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua.
`;

const meta: Meta<typeof RichTextTwoColumn> = {
  title: "Components/RichTextTwoColumns",
  component: RichTextTwoColumn,
  args: {
    leftContent: content,
    rightContent: content,
    leftFraction: 1,
    rightFraction: 1,
  },
};

export default meta;

type Story = StoryObj<typeof RichTextTwoColumn>;

export const Fraction1to1: Story = {};

export const Fraction1to2: Story = {
  args: { leftFraction: 1, rightFraction: 2 },
};
export const Fraction2to1: Story = {
  args: { leftFraction: 2, rightFraction: 1 },
};
export const Fraction1to3: Story = {
  args: { leftFraction: 1, rightFraction: 3 },
};
export const Fraction2to3: Story = {
  args: { leftFraction: 2, rightFraction: 3 },
};
export const Fraction3to1: Story = {
  args: { leftFraction: 3, rightFraction: 1 },
};
export const Fraction3to2: Story = {
  args: { leftFraction: 3, rightFraction: 2 },
};
export const Fraction1to4: Story = {
  args: { leftFraction: 1, rightFraction: 4 },
};
export const Fraction2to4: Story = {
  args: { leftFraction: 2, rightFraction: 4 },
};
export const Fraction3to4: Story = {
  args: { leftFraction: 3, rightFraction: 4 },
};
export const Fraction4to1: Story = {
  args: { leftFraction: 4, rightFraction: 1 },
};
export const Fraction4to2: Story = {
  args: { leftFraction: 4, rightFraction: 2 },
};
export const Fraction4to3: Story = {
  args: { leftFraction: 4, rightFraction: 3 },
};
export const Fraction4to4: Story = {
  args: { leftFraction: 4, rightFraction: 4 },
};
