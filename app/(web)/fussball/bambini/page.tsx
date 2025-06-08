import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { PageContent } from "#/components/web/page/PageContent";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle("Bambini"),
};

export default function Bambini() {
  const { width, height } = calcImageDimensionsForWidth({ width: 1878, height: 920 }, 1280);
  return (
    <PageContent>
      <SectionTitle title="Bambini" />
      <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/fussball/bambini-team-2024-25.png"
          alt="Mannschaftsfoto Bambini 2024/25"
          width={width}
          height={height}
          className="w-full"
        />
        <p>
          In Saison 2024/25 spielen und trainieren die Kinder der <b>Jahrgänge 2018 und 2019</b> in der U7 im
          Grundlagenbereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link>. Mit koordinativen und
          ersten technischen Inhalten sowie Spaß mit vielen Spielformen werden unsere Kleinsten an den Fußball
          herangeführt.
        </p>
        <h4>Training Sommer</h4>
        <p>Mittwoch 16:30 - 18:15 Uhr auf dem Kunstrasenplatz</p>
        <p>Freitag 16:30 - 18:15 Uhr auf dem Rasenplatz</p>
        <h4>Training Winter</h4>
        <p>Freitag 16:00 - 18:00 Uhr in der Gemeindehalle</p>
        <h4>Kontakt</h4>
        <p>
          <Link href="mailto:bambini@svwalddorf.de">bambini@svwalddorf.de</Link>
        </p>
        <p>Probetraining nach Absprache</p>
        <h4>Trainer und Betreuer</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Daniel Sax")} />
          <PersonCard person={getPersonByName("Giovanni Cimmino")} />
          <PersonCard person={getPersonByName("Pietro D'Angelo")} />
          <PersonCard person={getPersonByName("Serkan Borhan")} />
          <PersonCard person={getPersonByName("Sascha Flaig")} />
        </div>
      </div>
      <ArticleSection tags={["Bambini"]} />
    </PageContent>
  );
}
