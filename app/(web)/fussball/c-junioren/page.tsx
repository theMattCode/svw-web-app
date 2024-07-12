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
  title: getTitle("C-Junioren"),
};

export default function CJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4096, height: 2725 }, 1200);
  return (
    <PageBase>
      <BlockTitle title="C-Junioren" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 xl:grid-cols-4 grid-flow-row-dense gap-2">
          <Image
            src="/media/sparten/fussball/c-junioren-team-2024-25.jpg"
            alt="Mannschaftsfoto C-Junioren 2024/25"
            width={width}
            height={height}
            className="col-span-1 xl:col-span-3"
          />
          <div className="flex flex-col">
            <h3>Training Sommer</h3>
            <p>Dienstag 18:00 - 19:30 Uhr auf dem Kunstrasenplatz</p>
            <p>Donnerstag 18:00 - 19:30 Uhr auf dem Kunstrasenplatz</p>
            <h3>Training Winter</h3>
            <p>Dienstag 18:00 - 19:30 Uhr auf dem Kunstrasenplatz</p>
            <p>Freitag 18:00 - 19:30 Uhr in der Gemeindehalle</p>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:c-junioren@svwalddorf.de">c-junioren@svwalddorf.de</Link>
            </p>
          </div>
        </div>
        <h3>Trainer und Betreuer</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Björn Kittelmann")} />
          <PersonCard person={getPersonByName("Leonardo Lombardi")} />
          <PersonCard person={getPersonByName("Chris Weiß")} />
        </div>
      </div>
      <ArticlePreviewList tags={["C-Junioren"]} />
    </PageBase>
  );
}
