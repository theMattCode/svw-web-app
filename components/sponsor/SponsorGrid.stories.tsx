import { Meta, StoryObj } from "@storybook/react";
import { Sponsor } from "#/components/sponsor/Sponsor";
import { createUploadFileEntityResponse } from "#/lib/graphql/mock/upload";
import SponsorGrid from "#/components/sponsor/SponsorGrid";
import { SponsorEntity } from "#/lib/graphql/generated";

const meta: Meta = {
  title: "Components/Sponsor/Grid",
  component: Sponsor,
};

export default meta;

function generateSponsors(count: number = 10): SponsorEntity[] {
  const sponsors: SponsorEntity[] = [];
  for (let i = 0; i < count; i++) {
    sponsors.push({
      id: i.toString(),
      __typename: "SponsorEntity",
      attributes: {
        __typename: "Sponsor",
        name: `Sponsoring ${i} GmbH`,
        url: i % 2 === 0 ? "#" : undefined,
        image: createUploadFileEntityResponse(),
      },
    });
  }
  return sponsors;
}

export const Grid: StoryObj = {
  render: () => {
    return (
      <>
        <div className="p-4 bg-gray-200 h-4 w-full" />
        <SponsorGrid sponsors={generateSponsors()} />
        <div className="p-4 bg-gray-200 h-4 w-full" />
      </>
    );
  },
};
