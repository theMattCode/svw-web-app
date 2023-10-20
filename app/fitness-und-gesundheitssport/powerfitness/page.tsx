import React from "react";
import { BlockTitle } from "#/components/block/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import Image from "next/image";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";

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
              Unsere Ziele sind: Verbesserung der Kondition, Fitness, Körperhaltung und Figur. Einfach vorbei kommen und
              mitmachen.
            </p>
            <p>
              <ul className="list-disc px-8">
                <li>Ganzkörper Training</li>
                <li>Stabilisation von Rücken und Wirbelsäule</li>
                <li>Koordination des Gleichgewichts</li>
                <li>jede Menge Spaß und Fun</li>
              </ul>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Trainingszeiten</h4>
            <p>Montags 18:30 -20:30 Uhr im Gymnastikraum der Ballspielhalle</p>
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
    </PageBase>
  );
}
