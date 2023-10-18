import React from "react";
import { BlockTitle } from "#/components/block/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { EventCalendar } from "#/components/calendar/Calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { events } from "#/content/events";

export default function Veranstaltungen() {
  return (
    <PageBase>
      <BlockTitle title="Veranstaltungen" />
      <div className="bg-white shadow-2xl p-2 flex flex-col lg:flex-row gap-2">
        <EventCalendar events={events} />
      </div>
    </PageBase>
  );
}
