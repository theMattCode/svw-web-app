import { NextResponse } from 'next/server';
import path from 'path';
import { getEventMatters, EventMatter, Event } from '#/content/events'; // Assuming Event is exported from #/content/events

export async function GET() {
  const eventDirectory = path.resolve('./public', 'content', 'event');
  const allEventMatters: EventMatter[] = getEventMatters(eventDirectory);

  const todayAtMidnight = new Date();
  todayAtMidnight.setHours(0, 0, 0, 0);

  const upcomingEvents: Event[] = [];

  allEventMatters.forEach((eventMatter) => {
    eventMatter.calendarEntries.forEach((entry) => {
      // The 'start' and 'end' fields from gray-matter are initially strings.
      // They need to be converted to Date objects for comparison and for the response.
      const eventStartDate = new Date(entry.start);
      const eventEndDate = new Date(entry.end); // Also convert end date

      if (eventStartDate >= todayAtMidnight) {
        // Add the event with Date objects for start/end.
        // The Event type defines start/end as Date.
        // JSON serialization will convert these Date objects to ISO strings.
        upcomingEvents.push({
          ...entry,
          start: eventStartDate,
          end: eventEndDate,
        });
      }
    });
  });

  // Sort upcoming events by their start date (earliest first)
  upcomingEvents.sort((a, b) => a.start.getTime() - b.start.getTime());

  return NextResponse.json(upcomingEvents);
}
