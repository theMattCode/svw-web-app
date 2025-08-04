"use client";

import { Announcements } from "#/components/announcements/Announcements";
import { useEffect, useState } from "react";
import { Announcement } from "#/content/announcements";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PiSpeakerHighDuotone } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";

export function AnnouncementsBlock() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    fetch("/api/announcements").then((response) => response.json().then((data) => setAnnouncements(data)));
  }, []);

  if (announcements.length === 0) {
    return null;
  }

  return (
    <div className="bg-svw-blue-lighter/75">
      <div className="container flex flex-col gap-4 p-4">
        <SectionTitle title="Ankündigungen" Icon={HiOutlineSpeakerphone} />
        <Announcements announcements={announcements} />
      </div>
    </div>
  );
}
