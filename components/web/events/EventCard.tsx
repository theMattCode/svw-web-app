import { Event } from "#/content/events";
import { GrLocation } from "react-icons/gr";
import { CardContent, CardIcon, CardTitle, IconCard } from "#/components/web/card/Card";
import { MdEvent } from "react-icons/md";
import Link from "next/link"; // Assuming react-icons is available

// Helper function for formatting date and time (can be basic for now)
// It should handle allDay events appropriately.
const formatEventDateTime = (start: Date, end: Date, allDay?: boolean): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Use 24-hour format or true for 12-hour
  };

  if (allDay) {
    return `${new Date(start).toLocaleDateString("de-DE", { weekday: "short", year: "numeric", month: "short", day: "numeric" })} (Ganztägig)`;
  }

  const startDateStr = new Date(start).toLocaleDateString("de-DE", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const startTimeStr = new Date(start).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const endTimeStr = new Date(end).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", hour12: false });

  // If start and end are on the same day
  if (new Date(start).toDateString() === new Date(end).toDateString()) {
    return `${startDateStr}, ${startTimeStr} - ${endTimeStr}`;
  } else {
    // If events span multiple days (less common for cards, but good to handle)
    const endDateStr = new Date(end).toLocaleDateString("de-DE", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return `${startDateStr}, ${startTimeStr} - ${endDateStr}, ${endTimeStr}`;
  }
};

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps) {
  const Content = (
    <IconCard title={event.title}>
      <CardIcon icon={MdEvent} />
      <CardContent>
        <CardTitle>{event.title}</CardTitle>
        <p className="text-sm text-gray-600 mb-1">{formatEventDateTime(event.start, event.end, event.allDay)}</p>
        {event.place && (
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <GrLocation className="mr-1 flex-shrink-0" />
            <span className="font-medium">{event.place.name}</span>
            {event.place.address && <span className="ml-1">, {event.place.address}</span>}
          </div>
        )}
      </CardContent>
      {/*event.url && (
        <div className="mt-auto pt-2">
          <Link
            href={event.url}
            className="inline-block bg-svw-orange-default text-white px-4 py-2 rounded hover:bg-svw-orange-darker transition-colors text-sm font-medium"
          >
            Details ansehen
          </Link>
        </div>
      )*/}
    </IconCard>
  );
  return event.url ? (
    <Link href={event.url} className="no-underline">
      {Content}
    </Link>
  ) : (
    Content
  );
}
