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
  title: getTitle("F-Junioren"),
};

export default function FJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4096, height: 2725 }, 1200);
  return (
    <PageBase>
      <BlockTitle title="F-Junioren" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 xl:grid-cols-4 grid-flow-row-dense gap-2">
          <Image
            src="/media/sparten/fussball/f-junioren-team-2024-25.jpg"
            alt="Mannschaftsfoto F-Junioren 2024/25"
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
          <PersonCard person={getPersonByName("Moritz Krämer")} />
          <PersonCard person={getPersonByName("Matthäus Mayer")} />
          <PersonCard person={getPersonByName("Hannes Kopp")} />
          <PersonCard person={getPersonByName("Michael Opalla")} />
          <PersonCard person={getPersonByName("Jörg Schlick")} />
          <PersonCard person={getPersonByName("Markus Holmgren")} />
        </div>
      </div>
      <ArticlePreviewList tags={["F-Junioren"]} />
    </PageBase>
  );
}
