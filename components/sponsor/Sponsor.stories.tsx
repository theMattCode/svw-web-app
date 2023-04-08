import { Meta, StoryObj } from "@storybook/react";
import { Sponsor } from "#/components/sponsor/Sponsor";
import { createUploadFileEntityResponse } from "#/lib/graphql/mock/upload";

const meta: Meta = {
  title: "Components/Sponsor/Sponsor",
  component: Sponsor,
};

export default meta;

export const SponsorWithLink: StoryObj = {
  render: () => {
    return (
      <div className="p-6 bg-gray-100">
        <Sponsor
          sponsor={{
            id: "1",
            __typename: "SponsorEntity",
            attributes: {
              __typename: "Sponsor",
              name: "Sponsoring GmbH",
              url: "#",
              image: createUploadFileEntityResponse(),
            },
          }}
        />
      </div>
    );
  },
};

export const SponsorWithoutLink: StoryObj = {
  render: () => {
    return (
      <div className="p-6 bg-gray-100">
        <Sponsor
          sponsor={{
            id: "1",
            __typename: "SponsorEntity",
            attributes: {
              __typename: "Sponsor",
              name: "Sponsoring GmbH",
              image: createUploadFileEntityResponse(),
            },
          }}
        />
      </div>
    );
  },
};
