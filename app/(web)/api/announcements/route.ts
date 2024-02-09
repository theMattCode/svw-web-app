import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import matter from "gray-matter";
import { Announcement, AnnouncementWithFrontmatter } from "#/content/announcements";
import { isWithinInterval } from "date-fns";

const announcementsDir = "content/announcement";
export async function GET(request: NextRequest) {
  const now = new Date();
  const announcements: Announcement[] = fs
    .readdirSync(announcementsDir)
    .map((file) => {
      const markdown = fs.readFileSync(`${announcementsDir}/${file}`, "utf-8");
      const { data, content } = matter(markdown);
      return { ...data, mdContent: content } as AnnouncementWithFrontmatter;
    })
    .filter((announcement) =>
      isWithinInterval(now, {
        start: new Date(announcement.activeDate),
        end: new Date(announcement.expiryDate),
      }),
    );
  return NextResponse.json(announcements);
}
