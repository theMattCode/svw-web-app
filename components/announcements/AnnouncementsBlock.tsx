"use client";

import { Announcements } from "#/components/announcements/Announcements";
import { useEffect, useState } from "react";
import { Announcement } from "#/content/announcements";

export function AnnouncementsBlock() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    fetch("/api/announcements").then((response) =>
      response.json().then((data) => setAnnouncements(data))
    );
  }, []);

  if (announcements.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 p-4 bg-amber-200">
      <div className="font-bold text-3xl md:-translate-x-0.5 self-center">
        Ankündigungen
      </div>
      <Announcements announcements={announcements} />
    </div>
  );
}
