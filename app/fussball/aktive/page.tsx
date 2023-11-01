import React from "react";
import Image from "next/image";
import { PageBase } from "#/components/page/PageBase";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import Link from "next/link";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { FussballDeWidget } from "#/components/widget/Fussball.de";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";

export default function Aktive() {
  const { width, height } = calcImageDimensionsForWidth({ width: 3477, height: 1367 }, 1200);
  return (
    <PageBase>
      <BlockTitle title="Aktive I + II" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 xl:grid-cols-4 grid-flow-row-dense gap-2">
          <Image
            src="/media/sparten/fussball/aktive-team-2023-24.png"
            alt="Mannschaftsfoto Aktive 2023/24"
            width={width}
            height={height}
            className="col-span-1 xl:col-span-3"
          />
          <div className="flex flex-col">
            <h3>Training</h3>
            <p>Dienstag und Donnerstag, 19:30 - 21:00 Uhr auf dem Kunstrasenplatz</p>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:aktive@svwalddorf.de">aktive@svwalddorf.de</Link>
            </p>
          </div>
        </div>
        <h3>Trainer und Betreuer</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Erol Türkoglu")} />
          <PersonCard person={getPersonByName("Luis Armbruster")} />
          <PersonCard person={getPersonByName("Fabian Schramm")} />
          <PersonCard person={getPersonByName("Julian Wohlfarth")} />
          <PersonCard person={getPersonByName("Achim Wohlfarth")} />
          <PersonCard person={getPersonByName("Björn Kittelmann")} />
        </div>
        <ArticlePreviewList tags={["Aktive I", "Aktive II"]} />
        <BlockTitle title="Tabelle Aktive I" />
        <FussballDeWidget widgetKey="02MK9VOPTC000000VUM1DNPAVTVU8DI7" height={904} />
        <BlockTitle title="Spielplan Aktive I" />
        <FussballDeWidget widgetKey="02KJUUTC8K000000VUM1DNOCVUTS8KJE" />
        <BlockTitle title="Tabelle Aktive II" />
        <FussballDeWidget widgetKey="02MKA0TUAG000000VUM1DNPEVUF0NFQ2" height={856} />
        <BlockTitle title="Spielplan Aktive II" />
        <FussballDeWidget widgetKey="02LH79RNPG000000VUM1DNOBVTKJO187" />
      </div>
    </PageBase>
  );
}
