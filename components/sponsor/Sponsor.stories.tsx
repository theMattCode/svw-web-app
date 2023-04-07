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
    );
  },
};

export const SponsorWithoutLink: StoryObj = {
  render: () => {
    return (
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
    );
  },
};
