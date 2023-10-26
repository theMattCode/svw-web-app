import { AnnouncementsBlock } from "#/components/announcements/AnnouncementsBlock";
import { Meta, StoryObj } from "@storybook/react";
import { Announcements } from "#/components/announcements/Announcements";
import { Announcement } from "#/content/announcements";

const meta: Meta<typeof AnnouncementsBlock> = {
  title: "Components/Announcements",
};

export default meta;

type Story = StoryObj<typeof AnnouncementsBlock>;

function createAnnouncement(announcement: Partial<Announcement>): Announcement {
  return {
    title: announcement.title ?? "Announcement Title",
    image: {
      src: announcement.image?.src ?? "/placeholder.svg",
      alt: announcement.image?.alt ?? "Placeholder",
      width: announcement.image?.width ?? 250,
      height: announcement.image?.height ?? 250,
    },
    mdContent:
      announcement.mdContent ??
      "Example Markdown Content\n\n" +
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.\n\n" +
        "[Mehr Informationen](#)",
  };
}

export const Single: Story = {
  render: () => <Announcements announcements={[createAnnouncement({})]} />,
};

export const Multiple: Story = {
  render: () => (
    <Announcements
      announcements={[
        createAnnouncement({ title: "Announcement Title 1" }),
        createAnnouncement({ title: "Announcement Title 2" }),
        createAnnouncement({ title: "Announcement Title 3" }),
      ]}
    />
  ),
};
