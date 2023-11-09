import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { PageBase } from "#/components/page/PageBase";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PersonCard } from "#/components/person/PersonCard";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";
import { getPersonByName } from "#/content/people";

export const metadata: Metadata = {
  title: getTitle("D-Junioren"),
};

export default function DJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 3656, height: 1311 }, 1200);
  return (
    <PageBase>
      <BlockTitle title="D-Junioren" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 xl:grid-cols-4 grid-flow-row-dense gap-2">
          <Image
            src="/media/sparten/fussball/d-junioren-team-2023-24.png"
            alt="Mannschaftsfoto D-Junioren 2023/24"
            width={width}
            height={height}
            className="col-span-1 xl:col-span-3"
          />
          <div className="flex flex-col">
            <h3>Training Sommer</h3>
            <p>Montag und Mittwoch 18:00 - 19:30 Uhr auf dem Kunstrasenplatz und dem Rasenplatz</p>
            <h3>Training Winter</h3>
            <p>Mittwoch 17:30 - 19:30 Uhr in der Ballspielhalle</p>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:d-junioren@svwalddorf.de">d-junioren@svwalddorf.de</Link>
            </p>
          </div>
        </div>
        <h3>Trainer und Betreuer</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Stefan Bader")} />
          <PersonCard person={getPersonByName("Chris Weiß")} />
          <PersonCard person={getPersonByName("Torben Grotz")} />
          <PersonCard person={getPersonByName("Hermann Saile")} />
          <PersonCard person={getPersonByName("Leonardo Lombardi")} />
          <PersonCard person={getPersonByName("Giovanni Cimmino")} />
          <PersonCard person={getPersonByName("Branco Dominikovic")} />
        </div>
      </div>
      <ArticlePreviewList tags={["D-Junioren"]} />
    </PageBase>
  );
}
