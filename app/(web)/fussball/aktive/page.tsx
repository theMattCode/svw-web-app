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

export function PlayerRow({ rowTitle, players }: { rowTitle: string; players: string }) {
  return (
    <div className="font-light flex flex-col md:flex-row gap-2">
      <b className="whitespace-nowrap">{rowTitle}:</b>
      <p>{players}</p>
    </div>
  );
}

export default function Aktive() {
  return (
    <div className="bg-neutral-200">
      <Image
        src="https://res.cloudinary.com/svwalddorf/image/upload/v1752432425/2025-26_Mannschaftsfoto_Aktive_tmvjmv.jpg"
        alt="Mannschaftsfoto Aktive 2025/26"
        width={1920}
        height={1080}
        className="w-full"
      />
      <div className="container flex flex-col gap-4 p-4">
        <SectionTitle title="Die Mannschaft" />
        <PlayerRow
          rowTitle="Reihe 3 (v.l.n.r.)"
          players="Erik Matthäi, Lukas Bux, Maurice Heim, Sabawun Khostwal, Carlo Schmid, Laurin Walker, Florian Komenda, Jack
            Rein, Jarne Roth, Nico Hunsicker, Thomas Ammon, Jan Becker, Maik Straub"
        />
        <PlayerRow
          rowTitle="Reihe 2 (v.l.n.r.)"
          players="Phillip Cus, Maximilian Schindler, Alexander Weber, Mannschaftskapitän 1. Mannschaft Luis Langeneck,
            Cheftrainer 1. Mannschaft Sven Pichler, Videoanalyst Giuseppe Vitale, Sportvorstand Björn Kittelmann,
            Co-Trainer 2. Mannschaft Julian Wohlfarth, Cheftrainer 2. Mannschaft Fabian Schramm, Mannschaftskapitän 2.
            Mannschaft Simon Vetter, Niko Baur, Danylo Gromovenko, Marcus Belschner"
        />
        <PlayerRow
          rowTitle="Reihe 1 (v.l.n.r.)"
          players="Florian Gschwind, Kai Petruv, Kai Ringwald, Tobias Fischer, Fabian Dillmann, Timo Thomas, Jannick Schülzle,
            Kevin Borek, Lucas Jakob, Louis Labenski, Luca Häfner, Luca Schmid"
        />
        <PlayerRow
          rowTitle="Es fehlen"
          players="Luis Armbruster, Lirim Armbruster, Marc Bezner, Dennis Dieter, Hakan Durmus, Fabian Gaiser, Dennis Hermann,
            Lukas Hermann, Simon heim, Jannik Jung, Marco Knoblauch, Shkelqim Krasniqi Patrick Mayer, Sven Riefler, Paul
            Röhrich, Jan Roller, Max Schraitle, Robin Schraitle, Micha Schuler, Moritz Schwaibold, Kiu Senner, Marco
            Speier, Nicolas Stadelmaier, Stefan Tilgner"
        />
        <SectionTitle title="Trainer und Betreuer" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h3>Training</h3>
              <p>Dienstag, 19:30 - 21:00 Uhr</p>
              <p>Donnerstag, 19:30 - 21:00 Uhr</p>
              <p>Freitag, 19:30 - 21:00 Uhr</p>
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
        {/*
        <SectionTitle title="Tabelle Aktive I" />
        <NextFussballDeIframeWidget widgetId="fd5c08aa-dbe8-4bea-b8d1-79d912931414" type="table" />
        <SectionTitle title="Spielplan Aktive I" />
        <NextFussballDeIframeWidget widgetId="dbb0c0cc-0c93-40c4-9de5-36f04cd4b788" type="team-matches" />
        <SectionTitle title="Tabelle Aktive II" />
        <NextFussballDeIframeWidget widgetId="c3ec19ee-9d12-4ea7-86c9-a4c3bcad753f" type="table" />
        <SectionTitle title="Spielplan Aktive II" />
        <NextFussballDeIframeWidget widgetId="fb7e552b-3689-4d55-a603-3120d5afa6e6" type="team-matches" />
        */}
      </div>
    </div>
  );
}
