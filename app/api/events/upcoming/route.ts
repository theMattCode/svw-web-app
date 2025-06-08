import { NextResponse } from "next/server";
import path from "path";
import { getEventMatters, EventMatter, Event } from "#/content/events";

export async function GET() {
  const eventDirectory = path.resolve("./public", "content", "event");
  const allEventMatters: EventMatter[] = getEventMatters(eventDirectory);

  const todayAtMidnight = new Date();
  todayAtMidnight.setHours(0, 0, 0, 0);

  const upcomingEvents: Event[] = [];

  allEventMatters.forEach((eventMatter) => {
    eventMatter.calendarEntries.forEach((entry) => {
      // The 'start' and 'end' fields from gray-matter are initially strings. They need to be converted to Date objects for comparison and for the response.
      const startDate = new Date(entry.start);
      const endDate = new Date(entry.end);

      if (startDate >= todayAtMidnight) {
        // JSON serialization will convert these Date objects to ISO strings.
        upcomingEvents.push({ ...entry, start: startDate, end: endDate });
      }
    });
  });

  // Sort upcoming events by their start date (earliest first)
  upcomingEvents.sort((a, b) => a.start.getTime() - b.start.getTime());

  return NextResponse.json(upcomingEvents);
}
