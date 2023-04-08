import { Meta, StoryObj } from "@storybook/react";
import RichTextTwoColumnComponent from "../richtext/RichTextTwoColumn";

const meta: Meta = {
  title: "Components/RichTextTwoColumns",
};

export default meta;

const content: string = `# h1 - Lorem Ipsum Dolor Sit Amet

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua.
`;

export const RichTextTwoColumns: StoryObj = {
  render: () => {
    return (
      <RichTextTwoColumnComponent
        leftContent={content}
        rightContent={content}
      />
    );
  },
};
