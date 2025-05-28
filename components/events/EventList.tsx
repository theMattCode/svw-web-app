"use client";

import { useEffect, useState } from 'react';
import { EventMatter, Event } from '#/content/events'; // Adjust import if Event is not directly under #/content/events
import { EventCard } from './EventCard'; // Assuming EventCard is in the same directory
import { Spinner } from '#/components/spinner/Spinner'; // Assuming Spinner component path

export function EventList() {
  const [eventMatters, setEventMatters] = useState<EventMatter[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: EventMatter[] = await response.json();
        setEventMatters(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred.');
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
    return (
      <div className="w-full text-center py-10 text-red-600">
        Fehler beim Laden der Veranstaltungen: {error}
      </div>
    );
  }

  if (!eventMatters || eventMatters.length === 0) {
    return (
      <div className="w-full text-center py-10 text-gray-700">
        Zurzeit sind keine Veranstaltungen vorhanden.
      </div>
    );
  }

  // Flatten all calendar entries from all event matters into a single list of events
  // and sort them by start date, earliest first.
  const allEvents = eventMatters
    .flatMap(em => em.calendarEntries.map(entry => ({
        ...entry,
        // Ensure start and end are Date objects if they aren't already
        // The API sends them as strings, EventCard expects Date objects
        start: new Date(entry.start), 
        end: new Date(entry.end),
    })))
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  if (allEvents.length === 0) {
    return (
      <div className="w-full text-center py-10 text-gray-700">
        Zurzeit sind keine Veranstaltungen vorhanden.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {allEvents.map((eventItem, index) => (
        // Using slug + index as key if event items within calendarEntries don't have unique IDs
        // Ideally, each Event object should have a unique ID for the key.
        // For now, we'll use the title and index as a composite key.
        // The event object from calendarEntries might not have a slug.
        // The Event type itself doesn't have a slug.
        <EventCard key={`${eventItem.title}-${index}`} event={eventItem} />
      ))}
    </div>
  );
}
