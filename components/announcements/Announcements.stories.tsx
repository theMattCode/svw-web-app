import { Announcements } from "#/components/announcements/Announcements";
import { Meta, StoryObj } from "@storybook/react";
import { Announcement, AnnouncementEntity } from "#/lib/graphql/generated";
import { AnnouncementsRibbon } from "#/components/announcements/AnnouncementsRibbon";
import { createUploadFileEntityResponse } from "#/lib/graphql/mock/upload";

const meta: Meta<typeof Announcements> = {
  title: "Components/Announcements",
};

export default meta;

type Story = StoryObj<typeof Announcements>;

function createAnnouncementEntity(
  announcementId: string,
  announcement: Partial<Announcement> = {}
): AnnouncementEntity {
  const id =
    announcementId ?? Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  return {
    __typename: "AnnouncementEntity",
    id: id ?? `announcement-${id}`,
    attributes: {
      __typename: "Announcement",
      title: announcement?.title ?? `Title of ${id}`,
      description: announcement?.description ?? `Description of ${id}`,
      slug: announcement?.slug ?? `title-of-${id}`,
      activeDate: announcement?.activeDate ?? "2023-01-11T00:00:00.000Z",
      expiryDate: announcement?.expiryDate ?? "2023-01-12T12:34:56.000Z",
      image: announcement?.image ?? null,
    },
  };
}

export const MultipleAnnouncements: Story = {
  render: () => (
    <AnnouncementsRibbon
      title="Ankündigung"
      announcements={[
        createAnnouncementEntity("announcement-1"),
        createAnnouncementEntity("announcement-2"),
        createAnnouncementEntity("announcement-3"),
      ]}
    />
  ),
};

export const SingleAnnouncement: Story = {
  render: () => (
    <AnnouncementsRibbon
      title="Ankündigung"
      announcements={[createAnnouncementEntity("announcement-1")]}
    />
  ),
};

export const SingleAnnouncementWithImage: Story = {
  render: () => (
    <AnnouncementsRibbon
      title="Ankündigung"
      announcements={[
        createAnnouncementEntity("announcement-1", {
          image: createUploadFileEntityResponse(),
        }),
      ]}
    />
  ),
};
