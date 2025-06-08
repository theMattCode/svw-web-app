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
  title: getTitle("F-Junioren"),
};

export default function FJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4096, height: 2725 }, 1280);
  return (
    <PageContent>
      <SectionTitle title="F-Junioren" />
      <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/fussball/f-junioren-team-2024-25.jpg"
          alt="Mannschaftsfoto F-Junioren 2024/25"
          width={width}
          height={height}
          className="w-full"
        />
        <div className="flex flex-col">
          <div className="font-light flex">
            <b className="whitespace-nowrap">Reihe 3 (v.l.n.r.):</b>
            <p className="px-2">
              Matti Gartenmeier, Jana Laufer, Lias Krämer, Fabian Sakota, Finn Dietrich, Emilian Kaiser, Leon Jansen,
              Fynn Schlick, Lenz Bayha, Noam Holmgren, Jonas Hedin, Jannis Keppeler
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap">Reihe 2 (v.l.n.r.):</b>
            <p className="px-2">
              Hannes Kopp (Trainer), Michael Opalla (Trainer), Diari Ernst, Elias Meyer, Maja Mangold, Marlon Kuhne,
              Luis Steinhilber, Benjamin Volle, Benno Eisele, Jozo Dugandzic, Jonathan Sax, Benjamin Hornung, Jörg
              Schlick (Trainer), Moritz Krämer (Trainer), Matthäus Mayer (Trainer)
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap ">Reihe 1 (v.l.n.r.):</b>
            <p className="px-2">
              Auron Tahiri, Vincent Kopp, Matti Ruoff, Ludwig Trautwein, Louis Schramm, Michel Besserer, Nils Mayer,
              Luis Thomas, Luuk Opalla, Luis Bayani, Mal Haziri, Jonas Reinecker, Mert Ugurlu
            </p>
          </div>
          <h3>Saison 2024/25</h3>
          <p>
            In Saison 2024/25 spielen und trainieren die <b>Kinder der Jahrgänge 2016 (U9) und 2017 (U8)</b> als
            F-Junioren im Grundlagenbereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link> mit
            koordinativen und ersten technischen Inhalten sowie Spaß mit vielen Spielformen.
          </p>
          <h3>Training Sommer</h3>
          <p>Mittwoch, 17:00 - 18:30 Uhr auf dem Rasenplatz</p>
          <p>Freitag, 17:00 - 18:30 Uhr auf dem Kunstrasen</p>
          <h3>Training Winter</h3>
          <p>Freitag, 16:00 - 19:00 in der Ballspielhalle</p>
          <h3>Kontakt</h3>
          <p>
            <Link href="mailto:f-junioren@svwalddorf.de">f-junioren@svwalddorf.de</Link>
          </p>
          <p>Probetraining nach Absprache</p>
        </div>
        <h3>Trainer und Betreuer</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Moritz Krämer")} />
          <PersonCard person={getPersonByName("Matthäus Mayer")} />
          <PersonCard person={getPersonByName("Hannes Kopp")} />
          <PersonCard person={getPersonByName("Michael Opalla")} />
          <PersonCard person={getPersonByName("Jörg Schlick")} />
          <PersonCard person={getPersonByName("Markus Holmgren")} />
        </div>
      </div>
      <ArticleSection tags={["F-Junioren"]} />
    </PageContent>
  );
}
