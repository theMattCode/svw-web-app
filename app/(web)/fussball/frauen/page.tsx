import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { PageContent } from "#/components/web/page/PageContent";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { fussballFrauen } from "#/content/sitemap";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle(fussballFrauen.name),
};

export default function Frauen() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4096, height: 2725 }, 1200);
  return (
    <PageContent>
      <SectionTitle title={fussballFrauen.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 xl:grid-cols-4 grid-flow-row-dense gap-2">
          <Image
            src="/media/sparten/fussball/frauen-team-2024-25.jpg"
            alt="Mannschaftsfoto Frauen 2024/25"
            width={width}
            height={height}
            className="col-span-1 xl:col-span-3"
          />
          <div className="flex flex-col">
            <h3>Training</h3>
            <p>Montag, 19:30 Uhr auf dem Kunstrasen</p>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:frauenfussball@svwalddorf.de">frauenfussball@svwalddorf.de</Link>
            </p>
          </div>
        </div>
        <p>
          Beim SV Walddorf gibt es auch ein Frauenfußball-Team. Hier sind Frauen aktiv, die Spaß am wöchentlichen
          Fußballtraining haben und die den Sport nicht um jeden Preis wettkampfmäßig betreiben wollen. Eine Teilnahme
          am Spielbetrieb ist aber nicht generell ausgeschlossen.
        </p>
        <p>
          Die Trainingsgruppe ist ideal für Frauen aller Altersklassen, die Spaß am Fußball haben und einfach probieren
          möchten, genauso wie für ehemals aktive Spielerinnen, die wieder einsteigen möchten.
        </p>
        <h3>Ansprechpartner</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Anke Schaal")} />
          <PersonCard person={getPersonByName("Melanie Senner")} />
        </div>
      </div>
      <ArticleSection tags={["Frauenfußball"]} />
    </PageContent>
  );
}
