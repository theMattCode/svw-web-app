import { Meta, StoryObj } from "@storybook/nextjs";
import { Sponsor } from "#/components/sponsor/Sponsor";
import SponsorGrid from "#/components/sponsor/SponsorGrid";

const meta: Meta = {
  title: "Components/Sponsor/Grid",
  component: Sponsor,
};

export default meta;

export const Grid: StoryObj = {
  render: () => {
    return (
      <>
        <div className="p-4 bg-gray-200 h-4 w-full" />
        <SponsorGrid />
        <div className="p-4 bg-gray-200 h-4 w-full" />
      </>
    );
  },
};
