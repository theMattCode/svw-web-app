import React from "react";
import Image from "next/image";
import { PageBase } from "#/components/page/PageBase";
import { BlockTitle } from "#/components/block/BlockTitle";
import Link from "next/link";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { calcImageDimensionsForWidth } from "#/lib/image";

export default function Bambini() {
  const { width, height } = calcImageDimensionsForWidth({ width: 3157, height: 1351 }, 1200);
  return (
    <PageBase>
      <BlockTitle title="Bambini" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 xl:grid-cols-4 grid-flow-row-dense gap-2">
          <Image
            src="/media/sparten/fussball/bambini-team-2023-24.png"
            alt="Mannschaftsfoto Bambini 2023/24"
            width={width}
            height={height}
            className="col-span-1 xl:col-span-3"
          />
          <div className="flex flex-col">
            <h3>Training Sommer</h3>
            <p>Mittwoch 16:30 - 18:15 Uhr auf dem Kunstrasenplatz</p>
            <p>Freitag 16:30 - 18:15 Uhr auf dem Rasenplatz</p>
            <h3>Training Winter</h3>
            <p>Freitag 16:00 - 18:00 Uhr in der Gemeindehalle</p>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:bambini@svwalddorf.de">bambini@svwalddorf.de</Link>
            </p>
            <p>
              <b>Probetraining</b> nach Absprache
            </p>
          </div>
        </div>
        <h3>Trainer und Betreuer</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Giovanni Cimmino")} />
          <PersonCard person={getPersonByName("Pietro D'Angelo")} />
          <PersonCard person={getPersonByName("Moritz Krämer")} />
          <PersonCard person={getPersonByName("Vincenzo Bonfiglio")} />
          <PersonCard person={getPersonByName("Jörg Schlick")} />
          <PersonCard person={getPersonByName("Daniel Sax")} />
          <PersonCard person={getPersonByName("Sascha Flaig")} />
          <PersonCard person={getPersonByName("Tobias Bayha")} />
        </div>
      </div>
    </PageBase>
  );
}
