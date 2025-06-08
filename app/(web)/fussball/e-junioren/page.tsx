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
  title: getTitle("E-Junioren"),
};

export default function EJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4096, height: 2725 }, 1280);
  return (
    <PageContent>
      <SectionTitle title="E-Junioren" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/fussball/e-junioren-team-2024-25.jpg"
          alt="Mannschaftsfoto E-Junioren 2024/25"
          width={width}
          height={height}
          className="w-full"
        />
        <div className="flex flex-col">
          <div className="font-light flex">
            <b className="whitespace-nowrap">Reihe 3 (v.l.n.r.):</b>
            <p className="px-2">
              Nikos Tsipos, Daniel Knopke, Mailo Wiggers, Benn Thomas, Nabil Noorwali, Ahmad Dawood, Lean Russom, Hamza
              Toy
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap">Reihe 2 (v.l.n.r.):</b>
            <p className="px-2">
              Daniel Thomas, Antonino Bonfiglio, Tim Neumann, Raphael Rabe, Mohammed Salih, Leandros Koulas, Adrian
              Schön, Henry Linde, Bence Varju, Max Kreißig, Mattheo Saile, Benno Walker, Florian Schön, Vincenzo
              Bonfiglio
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap ">Reihe 1 (v.l.n.r.):</b>
            <p className="px-2">
              Marcel Ostermann, Burak Selcuk, Dennis Bonfiglio, Robin Gartenmaier, Liam Zeh, Levin Cakir, Levin
              Bonfiglio, Marc Pomorin, Niklas Luik, Daniel Russom
            </p>
          </div>
          <h3>Saison 2024/25</h3>
          <p>
            In Saison 2024/25 spielen und trainieren die <b>Kicker der Jahrgänge 2014 (U11) und 2015 (U10)</b> als
            E-Junioren im Grundlagenbereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link> mit
            koordinativen und ersten technischen Inhalten sowie Spaß mit vielen Spielformen.
          </p>
          <h3>Training Sommer</h3>
          <p>Dienstag 17:00 - 18:30 Uhr auf dem Kunstrasenplatz</p>
          <p>Freitag 17:00 - 18:30 Uhr auf dem Kunstrasenplatz</p>
          <h3>Training Winter</h3>
          <p>Donnerstag 17:00 - 19:00 Uhr in der Ballspielhalle</p>
          <h3>Kontakt</h3>
          <p>
            <Link href="mailto:e-junioren@svwalddorf.de">e-junioren@svwalddorf.de</Link>
          </p>
        </div>
        <h3>Trainer und Betreuer</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Daniel Thomas")} />
          <PersonCard person={getPersonByName("Antonino Bonfiglio")} />
          <PersonCard person={getPersonByName("Florian Schön")} />
          <PersonCard person={getPersonByName("Vincenzo Bonfiglio")} />
          <PersonCard person={getPersonByName("Daniel Russom")} />
          <PersonCard person={getPersonByName("Marcel Ostermann")} />
        </div>
      </div>
      <ArticleSection tags={["E-Junioren"]} />
    </PageContent>
  );
}
