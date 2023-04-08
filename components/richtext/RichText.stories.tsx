import { Meta, StoryObj } from "@storybook/react";
import RichTextComponent from "#/components/richtext/RichText";

const meta: Meta = {
  title: "Components/RichText",
};

export default meta;

export const RichText: StoryObj = {
  render: () => (
    <RichTextComponent
      content={`# h1 - Lorem Ipsum Dolor Sit Amet

## h2 - Lorem Ipsum Dolor Sit Amet

### h3 - Lorem Ipsum Dolor Sit Amet

#### h4 - Lorem Ipsum Dolor Sit Amet

##### h5 - Lorem Ipsum Dolor Sit Amet

###### h6 - Lorem Ipsum Dolor Sit Amet

[a - Lorem Ipsum Dolor Sit Amet](#)

p - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua. **At vero eos et accusam** et justo duo dolores et ea rebum. Stet clita kasd
gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
elitr, _sed diam nonumy eirmod_ tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
sit amet.

> span - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
> dolore magna aliquyam erat, sed diam voluptua. **At vero eos et accusam** et justo duo dolores et ea rebum. Stet clita
> kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
> sadipscing elitr, _sed diam nonumy eirmod_ tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
> ipsum dolor sit amet.`}
    />
  ),
};
