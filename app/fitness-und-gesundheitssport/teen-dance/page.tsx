import React from "react";
import { BlockTitle } from "#/components/block/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import Image from "next/image";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";

export default function TeenDance() {
  const wegZurBallsporthalleDimensions = calcImageDimensionsForWidth({ width: 775, height: 389 }, 850);
  const trainingsraumDimensions = calcImageDimensionsForWidth({ width: 4160, height: 2080 }, 850);

  return (
    <PageBase>
      <BlockTitle title="Teen Dance" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h3>Angebot</h3>
            <p>
              Der SV Walddorf bietet für tanzbegeisterte Mädchen ein umfangreiches Trainingsprogramm an. In den
              Übungsstunden werden verschiedene Aufwärmkombinationen und altersgerechte Choreographien einstudiert. Am
              Ende werden die Tänze bei verschiedenen Veranstaltungen aufgeführt. Bei allem Fleiß kommt das Spielen aber
              nicht zu kurz.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Trainingszeiten</h3>
            <h4>1. Gruppe „Coole Engel“</h4>
            <p>Für Kinder im Alter von 6 – 9 Jahren.</p>
            <p>Donnerstag 15.30 -16.30 Uhr in der Ballspielhalle (Winter) bzw. Gemeindehalle (Sommer)</p>
            <h4>2. Gruppe „High Lights“</h4>
            <p>Für Kinder im Alter von 9 – 13 Jahren.</p>
            <p>Donnerstag 16.15 -17.15 Uhr in der Ballspielhalle (Winter) bzw. Gemeindehalle (Sommer)</p>
            <h4>3. Gruppe „Super Power Girls“</h4>
            <p>Für Kinder im Alter von ab 14 Jahren.</p>
            <p>Donnerstag 17.15 -18.15 Uhr im Gymnastikraum (Spiegelraum) der Ballspielhalle</p>
          </div>
        </div>
        <h3>Übungsleitung</h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Andrea Speier")} />
          <PersonCard person={getPersonByName("Ronja Mödinger")} />
        </div>
      </div>
    </PageBase>
  );
}
