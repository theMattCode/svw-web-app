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
import { PlayerRow } from "#/app/(web)/fussball/aktive/page";

export const metadata: Metadata = {
  title: getTitle("B-Junioren"),
};

export default function BJunioren() {
  return (
    <div className="bg-neutral-200">
      <Image
        src="https://res.cloudinary.com/svwalddorf/image/upload/v1753346965/2025-26_Mannschaftsfoto_B_A_Jugend_t7sjzh.jpg"
        alt="Mannschaftsfoto B- und A-Junioren 2025/26"
        width={1920}
        height={1080}
        className="w-full"
      />
      <div className="container flex flex-col gap-4 p-4">
        <SectionTitle title="B- und A-Junioren" />
        <PlayerRow
          rowTitle="Reihe 3 (v.l.n.r.)"
          players="Lean Shala, Julian Gaiser, Andi Binaj, Noel Akkoc, Moritz Mayer, Yann Thomas, Fabian Huthmacher, Tim Paetzold, Niklas Mayer, Vin Regensburger, Matthis Kittelmann"
        />
        <PlayerRow
          rowTitle="Reihe 2 (v.l.n.r.)"
          players="Benedikt Dehner, Peter Braun, Neven Martinovic, Lukas Steinicke, Jannis Klees, Trainer Finn Kittelmann, Trainer Benny Link, Trainer Dario Gavran, Trainer Björn Kittelmann, Trainer Holger Schmid, Fionn Fogl, Maurice Möck, Luca Bauer, Florian Hanser, David Schmid"
        />
        <PlayerRow
          rowTitle="Reihe 1 (v.l.n.r.)"
          players="Maxim Laux, Max Walker, Louis Schwinn, Chrisi Jesch, Mika Kittelmann, Simon Bauer, Noah Bez, Max Schwinn, Dorian Osaj, Tim Staudt, Micha Stanger, Kiyan Sezer, Linas Walker, Leo Filipovic
"
        />
        <PlayerRow
          rowTitle="Es fehlen"
          players="Tim Keller, Maxi Wörn, Linus Schmidt, Adonis Giannakoglu, Dennis Hess, Jonathan Troost, Chinar Kyose"
        />
        <SectionTitle title="Trainer und Betreuer" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Finn Kittelmann")} />
          <PersonCard person={getPersonByName("Björn Kittelmann")} />
          <PersonCard person={getPersonByName("Benjamin Link")} />
          <PersonCard person={getPersonByName("Holger Schmid")} />
          <PersonCard person={getPersonByName("Dario Gavran")} />
        </div>
        <div>
          <h3>Saison 2025/26</h3>
          <p>
            In Saison 2025/26 spielen und trainieren die Kicker der <b>Jahrgänge 2007 (U19) und 2008 (U18)</b> als
            A-Junioren im Aufbaubereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link> mit
            koordinativen, technischen und positionsspezifischer Inhalten sowie grundtaktischer Ausbildung.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3>Training</h3>
            <p>Dienstags, 18:00 - 19:30 Uhr in Walddorf</p>
            <p>Donnerstag, 18:15 - 19:45 Uhr in Walddorf</p>
          </div>
          <div>
            <h3>Kontakt</h3>
            <Link href="mailto:b-junioren@svwalddorf.de">b-junioren@svwalddorf.de</Link>
          </div>
        </div>
        <ArticleSection tags={["B-Junioren", "A-Junioren"]} />
      </div>
    </div>
  );
}
