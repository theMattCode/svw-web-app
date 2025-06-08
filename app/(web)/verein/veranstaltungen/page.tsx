import React from "react";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PageContent } from "#/components/web/page/PageContent";
import { EventGrid } from "#/components/web/events/EventGrid";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { veranstaltungen } from "#/content/sitemap";

export const metadata: Metadata = {
  title: getTitle(veranstaltungen.name),
};

export default function Veranstaltungen() {
  return (
    <PageContent>
      <SectionTitle title={veranstaltungen.name} />
      <EventGrid />
    </PageContent>
  );
}
