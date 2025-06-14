import React from "react";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import Link from "next/link";
import { PageContent } from "#/components/web/page/PageContent";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName, getPersonByTag } from "#/content/people";
import { ansprechpartner } from "#/content/sitemap";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";

export const metadata: Metadata = {
  title: getTitle(ansprechpartner.name),
};

export default function Ansprechpartner() {
  return (
    <PageContent>
      <SectionTitle title={ansprechpartner.name} />
      <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <p className="font-light">
            Bei Fragen zum SV Walddorf im Allgemeinen, unseren Angeboten oder Veranstaltungen können sie sich jederzeit
            gerne an ein Mitglied der Vorstandschaft sowie an unserer Geschäftsstelle wenden.
          </p>
          <p>
            Derzeit haben wir keine festen Geschäftszeiten. Bitte kontaktieren sie uns per e-mail oder sprechen sie uns
            unter <Link href="tel:+497127580015">07127/580015</Link> auf den Anrufbeantworter, wir rufen sie dann
            zurück.
          </p>
          <p>
            Bei Fragen zu einem bestimmten Angebot finden sie die entsprechende(n) Kontaktperson(en) meistens direkt bei
            Anklicken der passenden Seite oben im Menü.
          </p>
          <p>
            Hier haben wir nochmals einige Ansprechpartner für die verschiedensten Bereiche im Verein für sie
            aufgelistet:
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <PersonCard person={getPersonByTag("Geschäftsstelle")} />
          <PersonCard person={getPersonByTag("Vorstand Sport")} />
          <PersonCard person={getPersonByTag("Sportliche Leitung Aktive und Jugendfußball")} />
          <PersonCard person={getPersonByName("Monika Haar")} />
          <PersonCard person={getPersonByTag("Rehasport")} />
          <PersonCard person={getPersonByName("Julian Petermann")} />
          <PersonCard person={getPersonByName("Nadine Albrecht")} />
        </div>
      </div>
    </PageContent>
  );
}
