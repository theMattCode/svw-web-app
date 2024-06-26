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
import { club } from "#/content/club";
import { getPersonByName } from "#/content/people";
import { badminton } from "#/content/sitemap";

export const metadata: Metadata = {
  title: getTitle(badminton.name),
};

export default function Badminton() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4085, height: 2298 }, 1520);
  return (
    <PageBase>
      <BlockTitle title={badminton.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2 py-2">
        <Image
          src="/media/sparten/badminton/badminton-team-2021-08-22.jpg"
          alt="Badminton Mitglieder"
          width={width}
          height={height}
          className="transition-all self-center"
        />
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <p>
              Schnelligkeit – Reflexe – Ausdauer – überlegtes und platzierte spielen – ein kleiner Auszug aus den
              Fähigkeiten, durch die sich der gute Badminton Spieler auszeichnet. Wer diese Fähigkeiten trainieren will,
              oder Badminton einfach ganz ungezwungen ausprobieren möchte, ist bei uns genau richtig. Das Training
              findet donnerstags von 19 bis 22 Uhr statt, wir sind hier eine bunt gemischte Truppe mit Spielern zwischen
              16 und 65 Jahren, vom absoluten Anfänger bis zu sehr ambitionierten Spielern.
            </p>
            <p>
              Für Kinder ab 6 Jahren bieten wir montags von 17 bis 18:30 ein Training an. Grundlagen wie Schlagtechnik
              und Lauftechnik werden hier vermittelt und es soll der Spaß und die Spielfreude am Badminton geweckt
              werden.
            </p>
            <p>
              Außer Spiel, Spaß und Geselligkeit bieten wir auch noch die Möglichkeiten, in der Hobbyliga des
              Baden-Württembergischen Badminton Verbands (BWBV) anzutreten. Hier findet einmal im Monat ein Spiel gegen
              eine andere Mannschaft statt. Auf diese Weise kann man sein können gegen neue Gegner unter Beweis stellen.
              In der vergangenen Saison 19/20 blicken wir auf viele spannende Spiele zurück und konnten uns für die gute
              Leistung am Ende mit dem ersten Platz in unserer Spielgruppe belohnen.
            </p>
            <p>
              Wer mehr über das Badminton Angebot des SVW erfahren möchte, setzt euch einfach mit uns in Verbindung oder
              kommt zum Spielen vorbei!
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-shrink-0">
            <h4>Trainingszeiten</h4>
            <h5>Kinder (6-14 Jahre)</h5>
            <ul className="list-disc list-inside font-light">
              <li>Montag, 17:00 - 18:30 Uhr</li>
            </ul>
            <h5>Jugendliche und Erwachsene</h5>
            <ul className="list-disc list-inside font-light">
              <li>Montag, 18:30 - 19:30 Uhr</li>
              <li>Donnerstag, 19:00 - 22:00 Uhr</li>
            </ul>
            <h4>Kontakt</h4>
            <p>
              <Link href={`mailto:${club.contact.email}`}>badminton@svwalddorf.de</Link>
            </p>
            <h4>Aktive</h4>
            <p>
              <Link
                href="https://bwbv-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupPage?championship=SW+23%2F24&group=31104"
                target="_blank"
              >
                Aktuelle Tabelle und Spielplan
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-2">
        <PersonCard person={getPersonByName("Jonas Tittmann")} />
        <PersonCard person={getPersonByName("Julian Petermann")} />
      </div>
      <ArticlePreviewList tags={["Badminton"]} />
    </PageBase>
  );
}
