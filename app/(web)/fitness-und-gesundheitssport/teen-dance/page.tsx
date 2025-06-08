import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PageContent } from "#/components/web/page/PageContent";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { teenDance } from "#/content/sitemap";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import Image from "next/image";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle(teenDance.name),
};

export default function TeenDance() {
  const claudiaMusse = getPersonByName("Claudia Musse");
  const monikaHaar = getPersonByName("Monika Haar");
  const ronjaMoedinger = getPersonByName("Ronja Mödinger");

  const gruppe1Dimensions = calcImageDimensionsForWidth({ width: 6000, height: 4000 }, 768);
  const gruppe2Dimensions = calcImageDimensionsForWidth({ width: 4507, height: 2873 }, 768);
  const gruppe3Dimensions = calcImageDimensionsForWidth({ width: 4644, height: 3399 }, 768);

  return (
    <PageContent>
      <SectionTitle title={teenDance.name} />
      <div className="my-1 bg-white p-2 flex flex-col gap-2">
        <p>
          Herzlich Willkommen bei unseren Tanzgruppen! Im Fokus steht immer die Freude am Tanz, der individuelle
          Ausdruck und das Finden der eigenen persönlichen Charakteren. Wer in den Genuss von Ronjas Tanzleidenschaft
          kommen möchte, kann donnerstags zur Ballspielhalle kommen.
        </p>
        <p>
          Wer Interesse an der Tanzgruppe hat, kann sich gerne bei Claudia Musse (
          <Link href={`mailto:${claudiaMusse?.email}`}>{claudiaMusse?.email}</Link>) oder Monika Haar (
          <Link href={`mailto:${monikaHaar?.email}`}>{monikaHaar?.email}</Link>) melden.
        </p>
      </div>
      <SectionTitle title="Gruppe „Coole Engel“" />
      <div className="my-1 bg-white p-2 grid grid-cols-1 lg:grid-cols-2 gap-4 text-justify">
        <div className="flex flex-col gap-2">
          <p>Für Kinder im Alter von 6 – 9 Jahren.</p>
          <p>Donnerstags, 15.30 -16.30 Uhr, in der Ballspielhalle</p>
          <h4>Übungsleitung</h4>
          <p>
            Mein Name ist Claudia Musse und seit Mai dieses Jahres leite ich mit großer Freude die Tanzgruppe Coole
            Engel. Im Frühjahr habe ich einen Tanz-Workshop beim STB besucht, der mich letztlich überzeugt hat, die
            Gruppe zu übernehmen. Ich möchte den Kindern nicht nur Tanzschritte beibringen, sondern auch Teamgeist und
            ihr Selbstvertrauen fördern. Tanzen ist für mich eine Herzensangelegenheit, und ich freue mich darauf, diese
            Leidenschaft mit unseren jüngsten Mitgliedern zu teilen. Bei Interesse oder Fragen erreicht ihr mich per
            E-Mail.
          </p>
          <PersonCard person={claudiaMusse} />
        </div>
        <Image
          src="/media/sparten/fitness-und-gesundheitssport/teendance-1.png"
          alt="Coole Engel"
          width={gruppe1Dimensions.width}
          height={gruppe1Dimensions.height}
        />
      </div>
      <SectionTitle title="Gruppe „High Lights“" />
      <div className="my-1 bg-white p-2 grid grid-cols-1 lg:grid-cols-2 gap-4 text-justify">
        <div className="flex flex-col gap-2">
          <p>Für Teenies im Alter von 8 – 14 Jahren.</p>
          <p>Commercial & Hip Hop</p>
          <p>Donnerstags, 16.15 -17.15 Uhr, in der Ballspielhalle</p>
          <h4>Übungsleitung</h4>
          <p>
            Wenn Ronja den Spiegelraum der Ballspielhalle betritt, beginnt die Luft zu knistern. Denn von nun an füllt
            sich der Raum mit der Leidenschaft der Tanzlehrerin. Ihre Passion überträgt sie mit einer natürlichen Gabe
            an ihre jungen SchülerInnen. Ronja bringt ihren Gruppen verschiedene Aufwärm- und Kräftigungsübungen bei und
            entwickelt dabei langsam beeindruckende Choreographien, um die eigenen und gemeinsamen Interessen und
            Stärken der Gruppe wachsen zu lassen.
          </p>
          <PersonCard person={ronjaMoedinger} />
        </div>
        <Image
          src="/media/sparten/fitness-und-gesundheitssport/teendance-2.png"
          alt="High Lights"
          width={gruppe2Dimensions.width}
          height={gruppe2Dimensions.height}
        />
      </div>
      <SectionTitle title="Gruppe „Feathers“" />
      <div className="my-1 bg-white p-2 grid grid-cols-1 lg:grid-cols-2 gap-4 text-justify">
        <div className="flex flex-col gap-2">
          <p>Für Teenies im Alter von 8-14 Jahren.</p>
          <p>Contemporary & freier Tanz</p>
          <p>Donnerstags, 17.15 -18.15 Uhr, in der Ballspielhalle</p>
          <h4>Übungsleitung</h4>
          <PersonCard person={ronjaMoedinger} />
        </div>
        <Image
          src="/media/sparten/fitness-und-gesundheitssport/teendance-3.jpg"
          alt="Feathers"
          width={gruppe3Dimensions.width}
          height={gruppe3Dimensions.height}
        />
      </div>
      <ArticleSection tags={["Teen Dance"]} />
    </PageContent>
  );
}
