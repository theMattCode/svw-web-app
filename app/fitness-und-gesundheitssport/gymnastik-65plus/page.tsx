import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import Image from "next/image";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";

export default function Gymnastik65plus() {
  const wegZurBallsporthalleDimensions = calcImageDimensionsForWidth({ width: 775, height: 389 }, 850);
  const trainingsraumDimensions = calcImageDimensionsForWidth({ width: 4160, height: 2080 }, 850);

  return (
    <PageBase>
      <BlockTitle title="Gymnastik 65plus" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h4>Angebot</h4>
            <p>
              Durch ein abwechslungsreiches Gymnastikprogramm trägt dieser Kurs zur Verbesserung der Beweglichkeit,
              Koordination und Konzentrationsfähigkeit bei. Übungen sowie die Geselligkeit und der Spaß am gemeinsamen
              «Sich-bewegen» helfen, aktiv und fit zu bleiben. Rege Beteiligung an gemeinsamen Unternehmungen (Ausflüge/
              Konzerte usw.) unterstützen die Gemeinschaft, und fördern die Kommunikation über den Kurs hinaus.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Trainingszeiten</h4>
            <p> Dienstag 16:30-17:30 Uhr im Gymnastikraum der Ballspielhalle</p>
          </div>
        </div>
        <h4>Übungsleitung</h4>
        <PersonCard person={getPersonByName("Eva Marstaller")} />
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
      <ArticlePreviewList tags={["Gymnastik 65plus"]} />
    </PageBase>
  );
}
