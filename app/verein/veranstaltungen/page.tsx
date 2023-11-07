import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { EventCalendar } from "#/components/calendar/Calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Veranstaltungen() {
  return (
    <PageBase>
      <BlockTitle title="Veranstaltungen" />
      <div className="bg-white shadow-2xl p-2 flex flex-col lg:flex-row gap-2">
        {/* @ts-ignore */}
        <EventCalendar />
      </div>
    </PageBase>
  );
}
