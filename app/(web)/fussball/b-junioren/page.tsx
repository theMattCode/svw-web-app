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
  title: getTitle("B-Junioren"),
};

export default function BJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4096, height: 2725 }, 1280);
  return (
    <PageContent>
      <SectionTitle title="B-Junioren" />
      <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/fussball/b-junioren-team-2024-25.jpg"
          alt="Mannschaftsfoto B-Junioren 2024/25"
          width={width}
          height={height}
          className="w-full"
        />
        <div className="flex flex-col">
          <div className="font-light flex">
            <b className="whitespace-nowrap">Reihe 3 (v.l.n.r.):</b>
            <p className="px-2">
              Mattis Kittelmann, Niklas Mayer, Yann Thomas, Fabian Huthmacher, Laurin Epple, Moritz Mayer
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap">Reihe 2 (v.l.n.r.):</b>
            <p className="px-2">
              Trainer Finn Kittelmann, Ben Paetzold, Florian Hanser, Ben Lichtenberger, Lukas Steinicke, Theo
              Steinhauser, Leo Filipovic, Trainer Björn Kittelmann
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap ">Reihe 1 (v.l.n.r.):</b>
            <p className="px-2">
              Micha Stanger, Fionn Fogl, Tim Staudt, Simon Bauer, Louis Schwinn, Christopher Jesch, Linas Walker, David
              Schmid
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap ">Es fehlen:</b>
            <p className="px-2">Trainer Holger Schmid, Gerrit Müller</p>
          </div>
          <h3>Saison 2024/25</h3>
          <p>
            In Saison 2024/25 spielen und trainieren die Kicker der <b>Jahrgänge 2008 (U17) und 2009 (U16)</b> als
            B-Junioren im Aufbaubereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link> mit
            koordinativen, technischen und positionsspezifischer Inhalten sowie grundtaktischer Ausbildung.
          </p>
          <h3>Training</h3>
          <p>Dienstags, 18:00 - 19:30 Uhr in Walddorf</p>
          <p>Freitags, 18:15 - 19:45 Uhr in Walddorf</p>
          <h3>Kontakt</h3>
          <p>
            <Link href="mailto:b-junioren@svwalddorf.de">b-junioren@svwalddorf.de</Link>
          </p>
          <h3>Trainer und Betreuer</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <PersonCard person={getPersonByName("Björn Kittelmann")} />
            <PersonCard person={getPersonByName("Finn Kittelmann")} />
            <PersonCard person={getPersonByName("Holger Schmid")} />
          </div>
        </div>
      </div>
      <ArticleSection tags={["B-Junioren"]} />
    </PageContent>
  );
}
