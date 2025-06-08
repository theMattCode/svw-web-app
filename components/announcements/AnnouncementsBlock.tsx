"use client";

import { Announcements } from "#/components/announcements/Announcements";
import { useEffect, useState } from "react";
import { Announcement } from "#/content/announcements";
import { SectionTitle } from "#/components/web/section/SectionTitle";

export function AnnouncementsBlock() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    fetch("/api/announcements").then((response) => response.json().then((data) => setAnnouncements(data)));
  }, []);

  if (announcements.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col px-4 pt-4 bg-svw-blue-lighter/75`}>
      <SectionTitle title="Ankündigungen" />
      <Announcements announcements={announcements} />
    </div>
  );
}
