import React from "react";
import Image from "next/image";
import { PageBase } from "#/components/page/PageBase";
import { BlockTitle } from "#/components/block/BlockTitle";
import Link from "next/link";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { calcImageDimensionsForWidth } from "#/lib/image";

export default function EJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 3895, height: 1393 }, 1200);
  return (
    <PageBase>
      <BlockTitle title="E-Junioren" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 xl:grid-cols-4 grid-flow-row-dense gap-2">
          <Image
            src="/media/sparten/fussball/e-junioren-team-2023-24.png"
            alt="Mannschaftsfoto E-Junioren 2023/24"
            width={width}
            height={height}
            className="col-span-1 xl:col-span-3"
          />
          <div className="flex flex-col">
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
        </div>
        <h3>Trainer und Betreuer</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Daniel Thomas")} />
          <PersonCard person={getPersonByName("Arif Akkoc")} />
          <PersonCard person={getPersonByName("Sabawun Khostwal")} />
          <PersonCard person={getPersonByName("Timo Thomas")} />
          <PersonCard person={getPersonByName("Yann Thomas")} />
          <PersonCard person={getPersonByName("Yener Selcuk")} />
        </div>
      </div>
    </PageBase>
  );
}
