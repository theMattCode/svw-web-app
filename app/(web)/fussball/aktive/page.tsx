import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { PageContent } from "#/components/web/page/PageContent";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName, Person } from "#/content/people";
import { NextFussballDeIframeWidget } from "#/components/widget/NextFussballDeWidget";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle("Aktive"),
};

export default function Aktive() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4096, height: 2726 }, 1200);
  return (
    <PageContent>
      <SectionTitle title="Die Mannschaft" />
      <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/fussball/aktive-team-2024-25.jpg"
          alt="Mannschaftsfoto Aktive 2024/25"
          width={width}
          height={height}
          className="w-full"
        />
        <div className="font-light flex">
          <b className="whitespace-nowrap">Reihe 4 (v.l.n.r.):</b>
          <p className="px-2">
            Tom Schwaibold, Jannik Jung, Stefan Tilgner, Robin Schraitle, Jarne Roth, Nico Hunsiker, Sabawun Khostwal
          </p>
        </div>
        <div className="font-light flex">
          <b className="whitespace-nowrap">Reihe 3 (v.l.n.r.):</b>
          <p className="px-2">
            Dennis Hermann, Florian Komenda, Luis Langeneck, Maik Straub, Niko Baur, Jan Becker, Thomas Ammon, Erik
            Matthäi
          </p>
        </div>
        <div className="font-light flex">
          <b className="whitespace-nowrap">Reihe 2 (v.l.n.r.):</b>
          <p className="px-2">
            Marco Speier, Moritz Schwaibold (Kapitän 1.Mannschaft), Maurice Heim (Co-Trainer Erste), Sven Pichler
            (Cheftrainer Erste), Björn Kittelmann (Vorstand Sport), Julian Wohlfarth (Sportlicher Leiter / Co-Trainer
            Zweite), Fabian Schramm (Cheftrainer Zweite), Achim Wohlfarth (Betreuer), Paul Röhrich, Simon Vetter
            (Kapitän 2. Mannschaft)
          </p>
        </div>
        <div className="font-light flex">
          <b className="whitespace-nowrap ">Reihe 1 (v.l.n.r.):</b>
          <p className="px-2">
            Luca Schmid, Danylo Gromovenko, Alexander Peguero Castillo, Timo Thomas, Jannik Schülzle, Maximilian
            Schindler, Marcus Belschner, Jan Roller
          </p>
        </div>
        <div className="font-light flex">
          <b className="whitespace-nowrap ">Es fehlen:</b>
          <p className="px-2">
            Patrick Aberle, Marcus Becker, Daniel Burkhardt, Lukas Bux, Philipp Cus, Dennis Dieter, Fabian Gaiser, Max
            Glässer, Alexander, Alexander Greineck, Florian Gschwind, Carlos Haselhoff, Luca Häfner, Simon Heim, Lukas
            Hermann, Marco Knoblauch, Patrick Mayer, Kai Petruv, Jonas Retter, Fabian Rößler, Alexander Scharr, Carlo
            Schmid, David Schnitzler, Max Schraitle, Micha Schuler, Nicolas Stadelmaier, Giuseppe Vitale (Videoanalyst),
            Lorenzo Vitale, Luis Walker
          </p>
        </div>
        <h3>Trainer und Betreuer</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Sven Pichler")} />
          <PersonCard person={getPersonByName("Maurice Heim")} />
          <PersonCard person={getPersonByName("Fabian Schramm")} />
          <PersonCard person={getPersonByName("Julian Wohlfarth")} />
          <PersonCard person={getPersonByName("Achim Wohlfarth")} />
          <PersonCard
            person={
              {
                ...getPersonByName("Björn Kittelmann"),
                image: { src: "/media/people/bjoern-kittelmann-aktive-2024.png", width: 2000, height: 2000 },
              } as Person
            }
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3>Training</h3>
            <p>Dienstag und Donnerstag, 19:30 - 21:00 Uhr auf dem Kunstrasenplatz</p>
          </div>
          <div>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:erstemannschaft@svwalddorf.de">erstemannschaft@svwalddorf.de</Link>
            </p>
            <p>
              <Link href="mailto:zweitemannschaft@svwalddorf.de">zweitemannschaft@svwalddorf.de</Link>
            </p>
          </div>
        </div>
      </div>
      <ArticleSection tags={["Aktive I", "Aktive II"]} />
      <SectionTitle title="Tabelle Aktive I" />
      <NextFussballDeIframeWidget widgetId="fd5c08aa-dbe8-4bea-b8d1-79d912931414" type="table" />
      <SectionTitle title="Spielplan Aktive I" />
      <NextFussballDeIframeWidget widgetId="dbb0c0cc-0c93-40c4-9de5-36f04cd4b788" type="team-matches" />
      <SectionTitle title="Tabelle Aktive II" />
      <NextFussballDeIframeWidget widgetId="c3ec19ee-9d12-4ea7-86c9-a4c3bcad753f" type="table" />
      <SectionTitle title="Spielplan Aktive II" />
      <NextFussballDeIframeWidget widgetId="fb7e552b-3689-4d55-a603-3120d5afa6e6" type="team-matches" />
    </PageContent>
  );
}
