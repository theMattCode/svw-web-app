import React from "react";
import Image from "next/image";
import { PageBase } from "#/components/page/PageBase";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import Link from "next/link";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { calcImageDimensionsForWidth } from "#/lib/image";

export default function FJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 3686, height: 1306 }, 1200);
  return (
    <PageBase>
      <BlockTitle title="F-Junioren" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 xl:grid-cols-4 grid-flow-row-dense gap-2">
          <Image
            src="/media/sparten/fussball/f-junioren-team-2023-24.png"
            alt="Mannschaftsfoto F-Junioren 2023/24"
            width={width}
            height={height}
            className="col-span-1 xl:col-span-3"
          />
          <div className="flex flex-col">
            <h3>Training Sommer</h3>
            <p>Mittwoch, 17:00 - 18:30 Uhr auf dem Rasenplatz</p>
            <p>Freitag, 17:00 - 18:30 Uhr auf dem Kunstrasen</p>
            <h3>Training Winter</h3>
            <p>Freitag 17:00 - 19:00 in der Ballspielhalle</p>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:f-junioren@svwalddorf.de">f-junioren@svwalddorf.de</Link>
            </p>
            <p>
              <b>Probetraining</b> nach Absprache
            </p>
          </div>
        </div>
        <h3>Trainer und Betreuer</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Antonino Bonfiglio")} />
          <PersonCard person={getPersonByName("Florian Schön")} />
          <PersonCard person={getPersonByName("Matthäus Mayer")} />
          <PersonCard person={getPersonByName("Hannes Kopp")} />
          <PersonCard person={getPersonByName("Ahmet Adsiz")} />
          <PersonCard person={getPersonByName("Vincenzo Bonfiglio")} />
        </div>
      </div>
    </PageBase>
  );
}
