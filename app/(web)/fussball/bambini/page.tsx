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
  title: getTitle("Bambini"),
};

export default function Bambini() {
  return (
    <div className="bg-neutral-200">
      <Image
        src="https://res.cloudinary.com/svwalddorf/image/upload/v1752230036/2025-26_Mannschaftsfoto_Bambini_dylvog.jpg"
        alt="Mannschaftsfoto Bambini 2025/26"
        width={1920}
        height={1080}
        className="w-full"
      />
      <div className="container flex flex-col gap-4 p-4">
        <SectionTitle title="Die Mannschaft" />
        <PlayerRow
          rowTitle="Reihe 3 (v.l.n.r.)"
          players="Tao Qin (Trainer), Dirk Brucklacher (Trainer), Hendrik Renninger (Trainer), Jasmin Echteler (Trainerin)"
        />
        <PlayerRow
          rowTitle="Reihe 2 (v.l.n.r.)"
          players="Jan Kuril, Nicolás Navarro, Milla Bayani, Mika Liepe, Lars Rieger, Tom Zeeb, Felix Artz, Diana Cao, Christos Samouilidis"
        />
        <PlayerRow
          rowTitle="Reihe 1 (v.l.n.r.)"
          players="Robin Smith, Elias Warth, Noel Bonfiglio, Drago Dugandžić, Tom Künschner, Leo Renninger, Samuel Qin, Max Brucklacher, Linus Echteler"
        />
        <PlayerRow
          rowTitle="Es fehlen"
          players="Chrysostomos Kouranos, Josia Meyer, Matteo Klemm, Samuel Siedler, Manuel Liepe (Trainer), Volker Siedler (Trainer)"
        />
        <SectionTitle title="Trainer und Betreuer" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Tao Qin")} />
          <PersonCard person={getPersonByName("Dirk Brucklacher")} />
          <PersonCard person={getPersonByName("Hendrik Renninger")} />
          <PersonCard person={getPersonByName("Jasmin Echteler")} />
          <PersonCard person={getPersonByName("Manuel Liepe")} />
          <PersonCard person={getPersonByName("Volker Siedler")} />
        </div>
        <div>
          <h3>Saison 2025/26</h3>
          <p>
            In Saison 2024/25 spielen und trainieren die Kinder der <b>Jahrgänge 2019 und 2020</b> in der U7 im
            Grundlagenbereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link>. Mit koordinativen und
            ersten technischen Inhalten sowie Spaß mit vielen Spielformen werden unsere Kleinsten an den Fußball
            herangeführt.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h4>Training Sommer</h4>
            <p>Mittwoch 16:00 - 18:00 Uhr auf dem Kunstrasenplatz</p>
            <p>Freitag 16:00 - 18:00 Uhr auf dem Kunstrasenplatz</p>
            <h4>Training Winter</h4>
            <p>Freitag 16:00 - 18:00 Uhr in der Gemeindehalle</p>
          </div>
          <div>
            <h4>Kontakt</h4>
            <p>
              <Link href="mailto:bambini@svwalddorf.de">bambini@svwalddorf.de</Link>
            </p>
            <p>Probetraining nach Absprache</p>
          </div>
        </div>
        <ArticleSection tags={["Bambini"]} />
      </div>
    </div>
  );
}
