"use client";

import { Calendar, dateFnsLocalizer, View, Views } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import de from "date-fns/locale/de";
import { useCallback, useEffect, useState, useTransition } from "react";
import { setDefaultOptions } from "date-fns";
import { Event, EventMatter } from "#/content/events";
import Link from "next/link";
import { GrLocation } from "react-icons/gr";
import { OptionalLink } from "#/components/link/Link";
import { Spinner } from "#/components/spinner/Spinner";
import "react-big-calendar/lib/css/react-big-calendar.css";

setDefaultOptions({ locale: de });

const locales = {
  de: de,
  "de-DE": de,
};
const messages = {
  date: "Datum",
  time: "Zeit",
  event: "Event",
  day: "Tag",
  week: "Woche",
  work_week: "Arbeitswoche",
  month: "Monat",
  previous: "Zurück",
  next: "Weiter",
  yesterday: "Gestern",
  tomorrow: "Morgen",
  today: "Heute",
  agenda: "Agenda",
  noEventsInRange: "Keine Veranstaltungen in diesem Zeitraum",
  allDay: "ganztägig",
  showMore: (total: number) => `+${total} mehr`,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

type Props = { agendaOnly?: boolean };

export function EventCalendar({ agendaOnly = false }: Props) {
  const [events, setEvents] = useState<Event[] | false>(false);

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((eventMatter: EventMatter[]) => {
        setEvents(
          eventMatter.flatMap((event) =>
            event.calendarEntries.map((entry) => ({
              ...entry,
              start: new Date(entry.start),
              end: new Date(entry.end),
            }))
          )
        );
      });
  }, []);

  if (events === false) {
    return (
      <div key="CalendarLoadingSpinner" className="transition-all w-full text-center">
        <Spinner />
      </div>
    );
  }

  return <CalendarAdapter events={events} agendaOnly={agendaOnly} />;
}

function CalendarAdapter({ events, agendaOnly }: { events: Event[] } & Props) {
  const [view, setView] = useState<View>(Views.AGENDA);
  const [date, setDate] = useState(new Date());
  const onNavigate = useCallback((newDate: Date) => setDate(newDate), [setDate]);
  return (
    <Calendar
      localizer={localizer}
      events={events}
      view={view}
      onView={setView}
      views={agendaOnly ? [Views.AGENDA] : [Views.AGENDA, Views.DAY, Views.WEEK, Views.MONTH]}
      startAccessor="start"
      endAccessor="end"
      culture="de"
      messages={messages}
      style={{ width: "100%", minHeight: agendaOnly ? 300 : 700 }}
      date={date}
      length={365}
      onNavigate={onNavigate}
      formats={{ agendaDateFormat: "cccc, dd.MM.yyyy" }}
      components={{ event: ({ event }) => <EventDescription event={event} view={view} /> }}
    />
  );
}

type EventDescriptionProps = {
  event: Event;
  view: View;
};

function EventDescription({ event, view }: EventDescriptionProps) {
  if (view === "agenda") {
    return (
      <div className="flex flex-col">
        <div className="font-normal">
          <OptionalLink href={event.url}>{event.title}</OptionalLink>
        </div>
        <div className="flex items-center gap-1">
          <GrLocation />
          <div className="flex text-sm">
            <div>
              {event.place?.name} {event.place?.address ? `, ${event.place.address}` : ""}
            </div>
            {event.place?.url && (
              <div>
                <Link href={event.place.url.href} target="_blank">
                  {event.place.url.text}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col text-sm">
        <span className="flex text-ellipsis">{event.title}</span>
        {event.url && (
          <Link href={event.url} className="underline">
            Alle Infos
          </Link>
        )}
      </div>
    );
  }
}
