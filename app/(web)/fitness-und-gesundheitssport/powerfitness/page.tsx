import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { getTitle } from "#/lib/page";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PageContent } from "#/components/web/page/PageContent";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { powerFitness } from "#/content/sitemap";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle(powerFitness.name),
};

export default function Powerfitness() {
  const wegZurBallsporthalleDimensions = calcImageDimensionsForWidth({ width: 775, height: 389 }, 850);
  const trainingsraumDimensions = calcImageDimensionsForWidth({ width: 4160, height: 2080 }, 850);
  const gruppeDimensions = calcImageDimensionsForWidth({ width: 5418, height: 2492 }, 768);

  return (
    <PageContent>
      <SectionTitle title={powerFitness.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 text-justify">
            <h4>Powerfitness am Montagabend</h4>
            <p>
              Powerfitness ist ein idealer Kurs für Einsteigerinnen, junge Mütter und Wiedereinsteigerinnen.
              Übungsleiterin Andrea Troglauer legt die Trainingsschwerpunkte auf Beweglichkeit und Ausdauer und fördert
              dabei besonders folgende Punkte:
            </p>
            <ul className="list-disc px-8">
              <li>Verbesserung der Körperhaltung</li>
              <li>Steigerung der Herz-Kreislauf-Fitness</li>
              <li>Verbesserung von Mobilität und Balance</li>
              <li>Gewichtsreduktion durch erhöhten Kalorienverbrauch</li>
              <li>Verbesserung der Muskelkraft</li>
              <li>Allgemeines Wohlbefinden</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Trainingszeiten</h4>
            <p>Montags 18:30 - 19:30 und 19:30 - 20:30 Uhr im Gymnastikraum der Ballspielhalle</p>
            <Image
              src="/media/sparten/fitness-und-gesundheitssport/powerfitness-2024.jpg"
              alt="Powerfitness Gruppe"
              width={gruppeDimensions.width}
              height={gruppeDimensions.height}
            />
          </div>
        </div>
        <h4>Übungsleitung</h4>
        <PersonCard person={getPersonByName("Andrea Troglauer")} />
        <h3>Veranstaltungsort</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <Image
            src="/media/sparten/rehasport/weg-zur-ballsporthalle-2020.jpg"
            alt="Weg zur Ballsporthalle"
            width={wegZurBallsporthalleDimensions.width}
            height={wegZurBallsporthalleDimensions.height}
          />
          <Image
            src="/media/2020/2020-ballsporthalle-trainingsraum.jpg"
            alt="Trainingsraum"
            width={trainingsraumDimensions.width}
            height={trainingsraumDimensions.height}
          />
        </div>
      </div>
      <ArticleSection tags={["Powerfitness"]} />
    </PageContent>
  );
}
