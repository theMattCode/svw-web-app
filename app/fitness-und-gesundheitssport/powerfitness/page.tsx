import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import Image from "next/image";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";

export default function Powerfitness() {
  const wegZurBallsporthalleDimensions = calcImageDimensionsForWidth({ width: 775, height: 389 }, 850);
  const trainingsraumDimensions = calcImageDimensionsForWidth({ width: 4160, height: 2080 }, 850);

  return (
    <PageBase>
      <BlockTitle title="Powerfitness" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h4>Powerfitness am Montagabend</h4>
            <p>
              Powerfitness ist ein idealer Kurs für Einsteigerinnen, junge Mütter und Wiedereinsteigerinnen.
              Übungsleiterin Andrea Troglauer legt die Trainingsschwerpunkte auf Beweglichkeit und Ausdauer und fördert
              dabei besonders folgende Punkte:
            </p>
            <p>
              <ul className="list-disc px-8">
                <li>Verbesserung der Körperhaltung</li>
                <li>Steigerung der Herz-Kreislauf-Fitness</li>
                <li>Verbesserung von Mobilität und Balance</li>
                <li>Gewichtsreduktion durch erhöhten Kalorienverbrauch</li>
                <li>Verbesserung der Muskelkraft</li>
                <li>Allgemeines Wohlbefinden</li>
              </ul>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Trainingszeiten</h4>
            <p>Montags 18:30 - 19:30 und 19:30 - 20:30 Uhr im Gymnastikraum der Ballspielhalle</p>
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
      <ArticlePreviewList tags={["Powerfitness"]} />
    </PageBase>
  );
}
