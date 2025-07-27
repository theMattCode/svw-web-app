import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PageContent } from "#/components/web/page/PageContent";
import { PersonCard } from "#/components/web/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { steelDarts } from "#/content/sitemap";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle(steelDarts.name),
};

export default function SteelDarts() {
  return (
    <PageContent>
      <SectionTitle title={steelDarts.name} />
      <div className="my-1 bg-white p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/fitness-und-gesundheitssport/steeldarts/steeldarts.webp"
          alt="Fit und Gesund Team"
          width={1820}
          height={1080}
          className="w-full"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 text-justify">
            <p>
              Steel-Darts hat sich in letzter Zeit als sehr beliebt erwiesen, und wir denken, dies ist eine großartige
              Ergänzung zu unserem Sportangebot beim SV Walddorf. Steel-Darts ist eine Variante des Darts-Sports, bei
              der sog. Stahltipps (Pfeilspitzen) verwendet werden. Darts erfordert Präzision, Strategie und
              Konzentration, was es zu einem herausfordernden und spannenden Sport für Spieler aller Level macht.
              Ergebnis: Steigerung der mentalen Fitness und Motorik!
            </p>
            <p>
              An den Trainingsabenden spielen wir neben 301/501 unter anderem die sehr beliebten Trainingsspiele
              Highscore, Cricket, Shanghai und Fußball. Fußball wird mit mehreren Personen gespielt. Mit dem Bull
              erzielt man Ballbesitz und Tore werden auf einem Doppel erzielt. Gespielt wird sieben Runden.
            </p>
            <p>Eine Teilnahme an Darts-Wettkämpfen ist geplant.</p>
            <h4>Übungszeiten</h4>
            <p>Mittwochs, 18:00 - 21:00 Uhr</p>
            <h4>Übungsort</h4>
            <p>Darts-Raum im Sportheim Weiherwiesen</p>
          </div>
          <div className="flex flex-col gap-2">
            <Image
              src="/media/sparten/fitness-und-gesundheitssport/steeldarts/steeldarts-2.png"
              alt="Fit und Gesund Team"
              width={1820}
              height={1080}
              className="w-full"
            />
          </div>
        </div>
        <h4>Übungsleitung</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <PersonCard person={getPersonByName("Marc Musse")} />
          <PersonCard person={getPersonByName("Rainer Burkhardt")} />
        </div>
      </div>
      <ArticleSection tags={["Steel-Darts"]} />
    </PageContent>
  );
}
