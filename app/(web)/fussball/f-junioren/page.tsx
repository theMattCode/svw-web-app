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
  title: getTitle("F-Junioren"),
};

export default function FJunioren() {
  return (
    <div className="bg-neutral-200">
      <Image
        src="https://res.cloudinary.com/svwalddorf/image/upload/v1752230035/2025-26_Mannschaftsfoto_F-Jugend_xqcy1c.jpg"
        alt="Mannschaftsfoto F-Junioren 2025/26"
        width={1920}
        height={1080}
        className="w-full"
      />
      <div className="container flex flex-col gap-4 p-4">
        <SectionTitle title="Die Mannschaft" />
        <PlayerRow
          rowTitle="Reihe 4 (Trainer v.l.n.r.)"
          players="Daniel Sax, Giovanni Cimmino, Jörg Schlick, Markus Holmgren, Michael Opalla, Marc Schneider, Serkan Borhan, Moritz Krämer"
        />
        <PlayerRow
          rowTitle="Reihe 3 (v.l.n.r.)"
          players="Henry Kopp, Fabian Gmehling, Lias Krämer, Fynn Schlick, Paul Zizelmann, Leon Jansen, Duarosh Taha Mohammed, Kaan Özer, Luis Steinhilber, Benjamin Volle, Benno Eisele, Benjamin Sax, Timo Schall
"
        />
        <PlayerRow
          rowTitle="Reihe 2 (v.l.n.r.)"
          players="Noah Cimmino, Lionel Flaig, Henry Schneider, Kian Bonfiglio, Julius Hristea, Aurelio D’Angelo, Jonas Wolff, Jakob Mangold, Nándor Szilágyi, Jonah Mack, Malte Faller, Leonardo Migliore, Liya Ögdüm, Luca Sulz, Levin Borhan, Elay Borhan
"
        />
        <PlayerRow
          rowTitle="Reihe 1 (v.l.n.r.)"
          players="Rafael Kresse, Luuk Opalla, Diari Ernst, Auron Tahiri, Jana Laufer, Noam Holmgren, Oskar Haustein, Fabian Sakota, Jozo Dugandzic, Jonas Hedin, Kaan Meral, Lenz Bayha
"
        />
        <PlayerRow rowTitle="Es fehlen" players="Emilian Kaiser, Louis Bisceglia, Emma Krämer, Omar" />
        <SectionTitle title="Trainer und Betreuer" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Moritz Krämer")} />
          <PersonCard person={getPersonByName("Daniel Sax")} />
          <PersonCard person={getPersonByName("Michael Opalla")} />
          <PersonCard person={getPersonByName("Jörg Schlick")} />
          <PersonCard person={getPersonByName("Markus Holmgren")} />
          <PersonCard person={getPersonByName("Giovanni Cimmino")} />
          <PersonCard person={getPersonByName("Marc Schneider")} />
          <PersonCard person={getPersonByName("Serkan Borhan")} />
        </div>
        <div>
          <h3>Saison 2024/25</h3>
          <p>
            In Saison 2024/25 spielen und trainieren die <b>Kinder der Jahrgänge 2017 (U9) und 2018 (U8)</b> als
            F-Junioren im Grundlagenbereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link> mit
            koordinativen und ersten technischen Inhalten sowie Spaß mit vielen Spielformen.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3>Training Sommer</h3>
            <p>Mittwoch, 17:00 - 18:30 Uhr auf dem Rasenplatz</p>
            <p>Freitag, 17:00 - 18:30 Uhr auf dem Kunstrasen</p>
            <h3>Training Winter</h3>
            <p>Freitag, 16:00 - 19:00 in der Ballspielhalle</p>
          </div>
          <div>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:f-junioren@svwalddorf.de">f-junioren@svwalddorf.de</Link>
            </p>
            <p>Probetraining nach Absprache</p>
          </div>
        </div>
        <ArticleSection tags={["F-Junioren"]} />
      </div>
    </div>
  );
}
