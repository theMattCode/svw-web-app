import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { PersonCard } from "#/components/person/PersonCard";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";
import { getPersonByName } from "#/content/people";
import { badminton, badmintonKinder } from "#/content/sitemap";

export const metadata: Metadata = {
  title: getTitle(badminton.name),
};

export default function Badminton() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4085, height: 2298 }, 1520);
  return (
    <PageBase>
      <BlockTitle title={badmintonKinder.name} />
      <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2 py-2">
        <Image
          src="/media/sparten/badminton/badminton-team-2021-08-22.jpg"
          alt="Badminton Mitglieder"
          width={width}
          height={height}
          className="transition-all self-center"
        />
        <div className="flex flex-col gap-4">
          <p>
            Unser Kindertraining findet montags von 17:00 bis 18:30 statt und richtet sich an Kinder von 8 bis 14
            Jahren. Unsere Trainier Milena Heim, Jonas Tittmann und Julian Petermann vermitteln die grundlegenden
            Schlag-und Lauftechniken. Mindestens genauso wichtig wie die Technik ist der Spaß am Spiel, der mit
            abwechslungsreichen Übungen und Spielformen erweckt wird. Zu Beginn von jedem Training gibt es
            unterschiedliche Aufwärm-Übungen, die neben dem reinen Aufwärmen die koordinativen und kognitiven
            Fähigkeiten aufbauen. Außer Sportklamotten wird kein besonderes Equipment benötigt, wer Interesse hat, ist
            jederzeit eingeladen zum Schnuppern vorbei zu kommen.
          </p>
        </div>
        <div className="flex flex-col gap-2 shrink-0">
          <h4>Trainingszeiten</h4>
          <h5>Kinder (6-14 Jahre)</h5>
          <p>Montag, 17:00 - 18:30 Uhr</p>
          <h4>Kontakt</h4>
          <p>
            <Link href={`mailto:badminton@svwalddorf.de`}>badminton@svwalddorf.de</Link>
          </p>
        </div>
        <h4>Trainer</h4>
        <div className="flex flex-col xl:flex-row gap-2">
          <PersonCard person={getPersonByName("Jonas Tittmann")} />
          <PersonCard person={getPersonByName("Julian Petermann")} />
          <PersonCard person={getPersonByName("Milena Heim")} />
        </div>
      </div>
      <ArticlePreviewList tags={["Badminton"]} />
    </PageBase>
  );
}
