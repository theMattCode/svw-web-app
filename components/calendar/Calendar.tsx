"use client";

import { Calendar, dateFnsLocalizer, View, Views } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import de from "date-fns/locale/de";
import { useCallback, useState } from "react";
import { setDefaultOptions } from "date-fns";
import { Event } from "#/content/events";

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

type Props = {
  events: Event[];
};

export function EventCalendar({ events }: Props) {
  const [view, setView] = useState<View>(Views.AGENDA);
  const [date, setDate] = useState(new Date());
  const onNavigate = useCallback((newDate: Date) => setDate(newDate), [setDate]);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      view={view}
      onView={setView}
      views={[Views.AGENDA, Views.MONTH]}
      startAccessor="start"
      endAccessor="end"
      culture="de"
      messages={messages}
      style={{ width: "100%", minHeight: 500, height: "100%" }}
      date={date}
      length={365}
      onNavigate={onNavigate}
      formats={{
        agendaDateFormat: "cccc, dd.MM.yyyy",
      }}
    />
  );
}
