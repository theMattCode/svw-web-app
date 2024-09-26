import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";
import { teenDance } from "#/content/sitemap";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import Image from "next/image";

export const metadata: Metadata = {
  title: getTitle(teenDance.name),
};

export default function TeenDance() {
  const claudiaMusse = getPersonByName("Claudia Musse");
  const monikaHaar = getPersonByName("Monika Haar");

  const gruppe1Dimensions = calcImageDimensionsForWidth({ width: 6000, height: 4000 }, 768);
  const gruppe2Dimensions = calcImageDimensionsForWidth({ width: 4507, height: 2873 }, 768);
  const gruppe3Dimensions = calcImageDimensionsForWidth({ width: 4644, height: 3399 }, 768);

  return (
    <PageBase>
      <BlockTitle title={teenDance.name} />
      <div className="my-1 bg-white p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 text-justify">
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
            <h4>1. Gruppe „Coole Engel“</h4>
            <p>Für Kinder im Alter von 6 – 9 Jahren.</p>
            <p>Donnerstags, 15.30 -16.30 Uhr, in der Ballspielhalle</p>
            <Image
              src="/media/sparten/fitness-und-gesundheitssport/teendance-1.png"
              alt="Coole Engel"
              width={gruppe1Dimensions.width}
              height={gruppe1Dimensions.height}
            />
            <h4>2. Gruppe „High Lights“</h4>
            <p>Für Teenies im Alter von 8 – 14 Jahren.</p>
            <p>Commercial & Hip Hop</p>
            <p>Donnerstags, 16.15 -17.15 Uhr, in der Ballspielhalle</p>
            <Image
              src="/media/sparten/fitness-und-gesundheitssport/teendance-2.png"
              alt="High Lights"
              width={gruppe2Dimensions.width}
              height={gruppe2Dimensions.height}
            />
            <h4>3. Gruppe „Feathers“</h4>
            <p>Für Teenies im Alter von 8-14 Jahren.</p>
            <p>Contemporary & freier Tanz</p>
            <p>Donnerstags, 17.15 -18.15 Uhr, in der Ballspielhalle</p>
            <Image
              src="/media/sparten/fitness-und-gesundheitssport/teendance-3.jpg"
              alt="Feathers"
              width={gruppe3Dimensions.width}
              height={gruppe3Dimensions.height}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Übungsleitung</h3>
          <div className="flex flex-col md:flex-row gap-2">
            <PersonCard person={getPersonByName("Claudia Musse")} />
            <PersonCard person={getPersonByName("Ronja Mödinger")} />
          </div>
        </div>
      </div>
      <ArticlePreviewList tags={["Teen Dance"]} />
    </PageBase>
  );
}
