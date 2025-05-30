import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { EventList } from "#/components/web/events/EventList";
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
      <EventList />
    </PageBase>
  );
}
