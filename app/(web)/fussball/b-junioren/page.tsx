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
  title: getTitle("B-Junioren"),
};

export default function BJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 2903, height: 1327 }, 1200);
  return (
    <PageBase>
      <BlockTitle title="B-Junioren" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 xl:grid-cols-4 grid-flow-row-dense gap-2">
          <Image
            src="/media/sparten/fussball/b-junioren-team-2023-24.png"
            alt="Mannschaftsfoto B-Junioren 2023/24"
            width={width}
            height={height}
            className="col-span-1 xl:col-span-3"
          />
          <div className="flex flex-col">
            <h3>Training</h3>
            <p>Dienstag und Donnerstag 18:00 - 19:45 Uhr in Kirchentellinsfurt</p>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:b-junioren@svwalddorf.de">b-junioren@svwalddorf.de</Link>
            </p>
          </div>
        </div>
        <h3>Trainer und Betreuer</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Alex Paetzold")} />
          <PersonCard person={getPersonByName("Steffen Kittelmann")} />
          <PersonCard person={getPersonByName("Thomas Brülls")} />
        </div>
      </div>
      <ArticlePreviewList tags={["B-Junioren"]} />
    </PageBase>
  );
}
