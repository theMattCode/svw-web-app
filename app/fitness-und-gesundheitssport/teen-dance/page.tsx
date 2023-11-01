import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";
import Link from "next/link";

export default function TeenDance() {
  const wegZurBallsporthalleDimensions = calcImageDimensionsForWidth({ width: 775, height: 389 }, 850);
  const trainingsraumDimensions = calcImageDimensionsForWidth({ width: 4160, height: 2080 }, 850);

  const claudiaMusse = getPersonByName("Claudia Musse");
  const monikaHaar = getPersonByName("Monika Haar");

  return (
    <PageBase>
      <BlockTitle title="Teen Dance" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <p>
              Wenn Ronja den Spiegelraum der Ballspielhalle betritt, beginnt die Luft zu knistern. Denn von nun an füllt
              sich der Raum mit der Leidenschaft der Tanzlehrerin. Ihre Passion überträgt sie mit einer natürlichen Gabe
              an ihre jungen SchülerInnen. Ronja bringt ihren Gruppen verschiedene Aufwärm- und Kräftigungsübungen bei
              und entwickelt dabei langsam beeindruckende Choreographien, um die eigenen und gemeinsamen Interessen und
              Stärken der Gruppe wachsen zu lassen.
            </p>
            <p>
              Im Fokus steht immer die Freude am Tanz, der individuelle Ausdruck und das Finden der eigenen persönlichen
              Charakteren. Wer in den Genuss von Ronjas Tanzleidenschaft kommen möchte, kann donnerstags zur
              Ballspielhalle kommen.
            </p>
            <p>
              Wer Interesse an der Tanzgruppe hat, kann sich gerne bei Claudia Musse (
              <Link href={`mailto:${claudiaMusse?.email}`}>{claudiaMusse?.email}</Link>) oder Monika Haar (
              <Link href={`mailto:${monikaHaar?.email}`}>{monikaHaar?.email}</Link>) melden.
            </p>
          </div>
          <div>
            <h3>Trainingszeiten</h3>
            <h4>1. Gruppe „Coole Engel“</h4>
            <p>Für Kinder im Alter von 6 – 9 Jahren.</p>
            <p>Donnerstags, 15.30 -16.30 Uhr, in der Ballspielhalle</p>
            <h4>2. Gruppe „High Lights“</h4>
            <p>Für Kinder im Alter von 9 – 11 Jahren.</p>
            <p>Donnerstags, 16.15 -17.15 Uhr, in der Ballspielhalle</p>
            <h4>3. Gruppe „Super Power Girls“</h4>
            <p>Für Kinder im Alter von ab 11 Jahren.</p>
            <p>Donnerstags, 17.15 -18.15 Uhr, in der Ballspielhalle</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Übungsleitung</h3>
          <div className="flex flex-col md:flex-row gap-2">
            <PersonCard person={getPersonByName("Andrea Speier")} />
            <PersonCard person={getPersonByName("Ronja Mödinger")} />
          </div>
        </div>
      </div>
      <ArticlePreviewList tags={["Teen Dance"]} />
    </PageBase>
  );
}
