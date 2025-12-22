import { Meta, StoryObj } from "@storybook/nextjs";
import { Sponsor } from "#/components/sponsor/Sponsor";
import { sponsors } from "#/content/sponsor";

const meta: Meta = {
  title: "Components/Sponsor/Sponsor",
  component: Sponsor,
};

export default meta;

export const SponsorWithLink: StoryObj = {
  render: () => {
    return (
      <div className="p-6 bg-gray-100">
        <Sponsor sponsor={sponsors.find((candidate) => candidate.url)!} />
      </div>
    );
  },
};

export const SponsorWithoutLink: StoryObj = {
  render: () => {
    return (
      <div className="p-6 bg-gray-100">
        <Sponsor
          sponsor={sponsors.find((candidate) => candidate.url === null)!}
        />
      </div>
    );
  },
};
