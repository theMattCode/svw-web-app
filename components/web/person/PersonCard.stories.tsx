import { Meta, StoryObj } from "@storybook/nextjs";
import { getPersonByTag } from "#/content/people";
import { PersonCard } from "#/components/web/person/PersonCard";

const meta: Meta<typeof PersonCard> = {
  title: "Components/People",
  component: PersonCard,
};

export default meta;

type Story = StoryObj<typeof PersonCard>;

export const Default: Story = {
  args: {
    person: getPersonByTag("1. Vorsitzender"),
  },
};
