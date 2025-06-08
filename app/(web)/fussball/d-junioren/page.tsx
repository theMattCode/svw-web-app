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
  title: getTitle("D-Junioren"),
};

export default function DJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4096, height: 2726 }, 1280);
  return (
    <PageContent>
      <SectionTitle title="D-Junioren" />
      <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/fussball/d-junioren-team-2024-25.jpg"
          alt="Mannschaftsfoto D-Junioren 2024/25"
          width={width}
          height={height}
          className="w-full"
        />
        <div className="flex flex-col">
          <div className="font-light flex">
            <b className="whitespace-nowrap">Reihe 3 (v.l.n.r.):</b>
            <p className="px-2">
              Henry Gärtner, Ediz Dogan, Mohammad Mohammad, Konstantin Meißle, Raphael Renz, Paul Hellwig, Silas Bader,
              Josip Gavran, Emil Gmehling, Leander Steinhardt, Friedrich Aren Tunca, Noah Horvath.
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap">Reihe 2 (v.l.n.r.):</b>
            <p className="px-2">
              Jonathan Regner, Julian Gmehling, Adrian Krammer, Lasse Reck, Paul Riester, Magnus Salat, Thilo Klees,Mio
              Ruoff, Liam Woehlk, Adam Khouia, Phillip Klimek, David Rösch
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap ">Reihe 1 (v.l.n.r.):</b>
            <p className="px-2">
              Gabriel Heim, Moritz Starke, Emil Knötzsch, Moritz Walker, Ben Schneider, Lias Kittelberger, Tom Laufer,
              Hendrik Hahn, Elias Jesch, Ben Bauer, Luis Pommersbach, Levin Akkoc, Mohammed Amin Adouni, Antonio
              Cimmino.
            </p>
          </div>
          <h3>Saison 2024/25</h3>
          <p>
            In Saison 2024/25 spielen und trainieren die Kicker der <b>Jahrgänge 2012 (U13) und 2013 (U12)</b> als
            D-Junioren im Aufbaubereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link> mit
            koordinativen, technischen und positionsspezifischer Inhalten sowie grundtaktischer Ausbildung.
          </p>
          <h3>Training Sommer</h3>
          <p>Montag und Mittwoch 18:00 - 19:30 Uhr auf dem Kunstrasenplatz und dem Rasenplatz</p>
          <h3>Training Winter</h3>
          <p>Mittwoch 17:30 - 19:30 Uhr in der Ballspielhalle</p>
          <h3>Kontakt</h3>
          <p>
            <Link href="mailto:d-junioren@svwalddorf.de">d-junioren@svwalddorf.de</Link>
          </p>
          <h3>Trainer und Betreuer</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <PersonCard person={getPersonByName("Stefan Bader")} />
            <PersonCard person={getPersonByName("Hermann Saile")} />
            <PersonCard person={getPersonByName("Giovanni Cimmino")} />
            <PersonCard person={getPersonByName("Tobias Rösch")} />
            <PersonCard person={getPersonByName("Mike Bauer")} />
            <PersonCard person={getPersonByName("Arif Akkoc")} />
            <PersonCard person={getPersonByName("Yener Selcuk")} />
          </div>
        </div>
      </div>
      <ArticleSection tags={["D-Junioren"]} />
    </PageContent>
  );
}
