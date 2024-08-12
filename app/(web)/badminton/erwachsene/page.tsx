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
import { badminton, badmintonErwachsene } from "#/content/sitemap";

export const metadata: Metadata = {
  title: getTitle(badminton.name),
};

export default function Badminton() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4085, height: 2298 }, 1520);
  return (
    <PageBase>
      <BlockTitle title={badmintonErwachsene.name} />
      <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/badminton/badminton-team-2021-08-22.jpg"
          alt="Badminton Mitglieder"
          width={width}
          height={height}
          className="transition-all self-center"
        />
        <div className="flex flex-col gap-2">
          <p>
            Wir sind eine bunt gemischte Truppe, vom Anfänger bis zu unseren aktiven Spielern und vom Jugendlichen bis
            zum Rentner. Wir sind stolz, zusätzlich zu unserer aktiven Mannschaft weiterhin erfolgreich in der Hobbyliga
            antreten zu können. Die Hobbyliga ist ein abgeschwächter Ligabetrieb, hier finden die Spiele während den
            Trainingszeiten statt und der Spaß steht im Vordergrund. Unser Trainingsbetrieb ist eine Mischung aus freiem
            Spiel und aus gezielten Trainingseinheiten durch unsere C-Trainer Jonas Tittmann und Julian Petermann. Nach
            dem Training geht es stets zum gemütlichen Teil in unsere Sportgaststätte Weiherwiesen.
          </p>
          <p>
            Wir bieten außerdem gemeinsame Ausflüge an, z.B. als Zuschauer zum Profiturnier „Hylo Open“ nach Saarbrücken
            oder übers Wochenende zu Spielerlehrgängen.
          </p>
          <p>
            Wer Badminton ausprobieren oder wiedereinsteigen möchte, ist herzlich zu uns eingeladen, völlig unabhängig
            vom Spielniveau oder Alter. Unser Training findet jeden Donnerstag in der Ballspielhalle ab 19:00 bis 22:00
            Uhr statt.
          </p>
          <h4>Trainingszeiten</h4>
          <h5>Jugendliche und Erwachsene</h5>
          <p>Donnerstag, 19:00 - 22:00 Uhr</p>
          <h4>Kontakt</h4>
          <p>
            <Link href={`mailto:badminton@svwalddorf.de`}>badminton@svwalddorf.de</Link>
          </p>
        </div>
        <h4>Trainer</h4>
        <div className="flex flex-col xl:flex-row gap-2">
          <PersonCard person={getPersonByName("Jonas Tittmann")} />
          <PersonCard person={getPersonByName("Julian Petermann")} />
        </div>
      </div>
      <ArticlePreviewList tags={["Badminton"]} />
    </PageBase>
  );
}
