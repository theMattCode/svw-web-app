import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { EventCalendar } from "#/components/calendar/Calendar";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { veranstaltungen } from "#/content/sitemap";

export const metadata: Metadata = {
  title: getTitle(veranstaltungen.name),
};

export default function Veranstaltungen() {
  return (
    <PageBase>
      <BlockTitle title={veranstaltungen.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col lg:flex-row gap-2">
        <EventCalendar />
      </div>
    </PageBase>
  );
}
