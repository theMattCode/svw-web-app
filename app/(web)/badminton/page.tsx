import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PageContent } from "#/components/web/page/PageContent";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { badminton } from "#/content/sitemap";
import { SubMenu } from "#/components/navigation/SubMenu";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle(badminton.name),
};

export default function Badminton() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4085, height: 2298 }, 1520);
  return (
    <div className="px-2 flex flex-col bg-neutral-200 gap-2">
      <div className="py-4 w-full bg-svw-blue-default text-white">
        <SubMenu item={badminton} />
      </div>
      <PageContent>
        <SectionTitle title={badminton.name} />
        <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2 py-2">
          <Image
            src="/media/sparten/badminton/badminton-team-2021-08-22.jpg"
            alt="Badminton Mitglieder"
            width={width}
            height={height}
            className="transition-all self-center"
          />
          <div className="flex flex-col  gap-4">
            <div className="flex flex-col gap-2">
              <p>
                Schnelligkeit – Reflexe – Ausdauer – überlegtes und platzierte spielen – ein kleiner Auszug aus den
                Fähigkeiten, durch die sich der gute Badminton Spieler auszeichnet. Wer diese Fähigkeiten trainieren
                will, oder Badminton einfach ganz ungezwungen ausprobieren möchte, ist bei uns genau richtig. Das
                Training findet donnerstags von 19 bis 22 Uhr statt, wir sind hier eine bunt gemischte Truppe mit
                Spielern zwischen 16 und 65 Jahren, vom absoluten Anfänger bis zu sehr ambitionierten Spielern.
              </p>
              <p>
                Für Kinder ab 6 Jahren bieten wir montags von 17 bis 18:30 ein Training an. Grundlagen wie Schlagtechnik
                und Lauftechnik werden hier vermittelt und es soll der Spaß und die Spielfreude am Badminton geweckt
                werden.
              </p>
              <p>
                Außer Spiel, Spaß und Geselligkeit bieten wir auch noch die Möglichkeiten, in der Hobbyliga des
                Baden-Württembergischen Badminton Verbands (BWBV) anzutreten. Hier findet einmal im Monat ein Spiel
                gegen eine andere Mannschaft statt. Auf diese Weise kann man sein können gegen neue Gegner unter Beweis
                stellen. In der vergangenen Saison 19/20 blicken wir auf viele spannende Spiele zurück und konnten uns
                für die gute Leistung am Ende mit dem ersten Platz in unserer Spielgruppe belohnen.
              </p>
              <p>
                Wer mehr über das Badminton Angebot des SVW erfahren möchte, setzt euch einfach mit uns in Verbindung
                oder kommt zum Spielen vorbei!
              </p>
              <h4>Kontakt</h4>
              <p>
                <Link href={`mailto:badminton@svwalddorf.de`}>badminton@svwalddorf.de</Link>
              </p>
            </div>
            <h4>Spartenleitung und Trainer</h4>
            <div className="flex flex-col xl:flex-row gap-2 py-1">
              <PersonCard person={getPersonByName("Jonas Tittmann")} />
              <PersonCard person={getPersonByName("Julian Petermann")} />
              <PersonCard person={getPersonByName("Milena Heim")} />
            </div>
          </div>
        </div>
        <ArticleSection tags={["Badminton"]} />
      </PageContent>
    </div>
  );
}
