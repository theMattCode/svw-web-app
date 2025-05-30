"use client";

import { useEffect, useState } from "react";
import { Event } from "#/content/events";
import { EventCard } from "./EventCard";
import { Spinner } from "#/components/spinner/Spinner";

export function EventList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events/upcoming");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Event[] = await response.json();
        console.log(data); // Debugging: Log the fetched data to see its structure
        setEvents(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full text-center py-10">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div className="w-full text-center py-10 text-red-600">Fehler beim Laden der Veranstaltungen: {error}</div>;
  }

  if (!events || events.length === 0) {
    return <div className="w-full text-center py-10 text-gray-700">Zurzeit sind keine Veranstaltungen vorhanden.</div>;
  }

  // Flatten all calendar entries from all events into a single list of events and sort them by start date, earliest first.
  const sortedEvents = events
    .map((event) => ({
      ...event,
      // Ensure start and end are Date objects if they aren't already. The API sends them as strings, EventCard expects Date objects.
      start: new Date(event.start),
      end: new Date(event.end),
    }))
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  if (sortedEvents.length === 0) {
    return <div className="w-full text-center py-10 text-gray-700">Zurzeit sind keine Veranstaltungen vorhanden.</div>;
  }

  return (
    <div className="grid @xs:grid-cols-1 @3xl:grid-cols-2 gap-2">
      {sortedEvents.map((event, index) => (
        // Using slug + index as key if event items within calendarEntries don't have unique IDs
        // Ideally, each Event object should have a unique ID for the key. For now, we'll use the title and index as a composite key.
        // The Event type itself doesn't have a slug.
        <EventCard key={`${event.title}-${index}`} event={event} />
      ))}
    </div>
  );
}
