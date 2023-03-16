import { Meta, StoryObj } from "@storybook/react";
import { Person } from "#/components/person/Person";
import { createPeopleEntity } from "#/lib/graphql/mock/people";
import { createTagEntity } from "#/lib/graphql/mock/tag";

const meta: Meta<typeof Person> = {
  title: "Components/People",
};

export default meta;

type Story = StoryObj<typeof Person>;

export const PersonCard: Story = {
  render: () => {
    return (
      <Person
        person={createPeopleEntity({
          tags: [
            createTagEntity("1", { name: "Vorstand Anlagen & Inventar" }),
            createTagEntity("2", { name: "Spartenleiter Fußball" }),
            createTagEntity("3", { name: "Trainer C-Junioren" }),
            createTagEntity("4", { name: "Turnierorganisation" }),
          ],
        })}
      />
    );
  },
};
