import React from "react";
import { PiFilePdf } from "react-icons/pi";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { jugendschutz } from "#/content/sitemap";
import { PersonCard } from "#/components/person/PersonCard";
import Image from "next/image";
import { calcImageDimensionsForHeight } from "#/lib/image";
import Link from "next/link";
import { getPersonByName } from "#/content/people";

export const metadata: Metadata = {
  title: getTitle(jugendschutz.name),
};

export default function Jugendschutz() {
  const roteKarteDimensions = calcImageDimensionsForHeight({ width: 354, height: 255 }, 180);
  return (
    <PageBase>
      <BlockTitle title={jugendschutz.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <h2>Unsere Leitgedanken</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <p className="p-2 bg-svw-blue-darker text-white text-xl text-center place-content-center">
            Der SV Walddorf verpflichtet sich zur <b>Gewaltprävention</b> im Allgemeinen und zum{" "}
            <b>Schutze der Kinder und Jugendlichen</b> im Besonderen.
          </p>
          <Image
            src="/media/verein/jugendschutz/rote-karte.jpg"
            alt="Rote Karte für Gewalt im Sport!"
            width={roteKarteDimensions.width}
            height={roteKarteDimensions.height}
            className="justify-self-center"
          />
        </div>
        <ul className="list-disc list-outside ml-4 p-2">
          <li>
            Der SV Walddorf verpflichtet sich zur Gewaltprävention im Allgemeinen und zum Schutze der Kinder und
            Jugendlichen im Besonderen.
          </li>
          <li>Unser Verein soll ein sicherer Ort für alle Kinder und Jugendliche sein.</li>
          <li>
            Niemand darf sich respektlos gegenüber anderen verhalten und sich über den erkennbaren Willen eines anderen
            hinwegsetzen. „Ein Nein ist ein Nein“.
          </li>
          <li>Wir sprechen uns deutlich gegen Gewalt aus, egal ob körperlicher, seelischer oder sexueller Natur.</li>
          <li>
            Wir verpflichten uns, aktiv für das Kindeswohl einzutreten und jeglicher Kindeswohlgefährdung entgegen zu
            wirken.
          </li>
          <li>Wir schauen nicht weg – sondern wir handeln!</li>
        </ul>
        <h2>Unsere Zielsetzung</h2>
        <p>
          Unser Präventionskonzept zum Kinder- und Jugendschutz hat zum Ziel das Kindeswohl der dem SV Walddorf
          anvertrauten Kinder und Jugendlichen zu schützen und das Risiko einer Kindeswohlgefährdung, ob psychischer,
          körperlicher oder sexueller Natur zu minimieren.
        </p>
        <p>
          Der Schutz beginnt mit der Prävention (eine Gefährdung soll erst gar nicht eintreten) und er reicht bis zu den
          Interventions-Schritten in einem konkreten Fall.
        </p>
        <p>
          Ein wesentlicher Schwerpunkt dabei ist die Vermeidung von sexualisierter Gewalt gegen Kinder und Jugendliche.
        </p>
        <div className="flex flex-col gap-2">
          <h2>Unser Präventions- und Schutzkonzept basiert auf mehreren Bausteinen</h2>
          <p>1. Verankerung des Jugendschutzes in den Vereinsstatuten:</p>
          <ul className="list-disc list-outside ml-4 px-4">
            <li>
              <Link
                href="/download/2025-02-15_Geschaeftsordnung.pdf"
                target="_blank"
                className="underline text-svw-blue-dark inline-flex"
              >
                Geschäftsordnung <PiFilePdf />
              </Link>
            </li>
            <li>
              <Link
                href="/download/2024-05-27_Jugendschutzordnung.pdf"
                target="_blank"
                className="underline text-svw-blue-dark inline-flex"
              >
                Jugendschutzordnung <PiFilePdf />
              </Link>
              .
            </li>
          </ul>
          <p>
            2. Vereinbarung mit dem Jugendamt zur Umsetzung des im §72a SGB VIII verankerten Tätigkeitsausschlusses
            einschlägig vorbestrafter Personen.
          </p>
          <p>3. Benennung einer Jugendschutzbeauftragten.</p>
          <p>
            4. Regelmäßige Qualifizierungsmaßnahmen für Vereinsmitarbeiter, speziell für Übungsleiter im Kinder- und
            Jugendbereich.
          </p>
          <p>
            5. Alle Vereinsmitarbeiter bekennen sich zu unserem&nbsp;
            <Link href="/download/2024-06-05_Ehrenkodex.pdf" className="underline text-svw-blue-dark inline-flex">
              Ehrenkodex <PiFilePdf />
            </Link>
            . Alle unsere Übungsleiter im Kinder- und Jugendbereich verpflichten sich spezielle&nbsp;
            <Link
              href="/download/2024-06-05_Uebungsleitung-Verhaltensregeln.pdf"
              className="underline text-svw-blue-dark inline-flex"
            >
              Verhaltensregeln im Umgang mit Kinder- und Jugendlichen <PiFilePdf />
            </Link>
            &nbsp; einzuhalten. Sie sind verpflichtet, alle 3 Jahre ein erweitertes Führungszeugnis vorzulegen.
          </p>
          <p>
            6. Unser Interventionsleitfaden zeigt auf, was bei einem Vorfall oder im Verdachtsfall zu tun ist. Das&nbsp;
            <Link
              href="/download/2024-05-01_Formular_Protokoll_Ereignis.pdf"
              className="underline text-svw-blue-dark inline-flex"
            >
              Formular zur Dokumentation eines Ereignisses <PiFilePdf />
            </Link>
            &nbsp; im Rahmen des Präventionskonzeptes zum Kinder- und Jugendschutz im Sportverein Walddorf 1904 e.V.
            steht öffentlich zum&nbsp;
            <Link
              href="/download/2024-05-01_Formular_Protokoll_Ereignis.pdf"
              className="underline text-svw-blue-dark inline-flex"
            >
              Download als PDF
            </Link>
            &nbsp; bereit.
          </p>
        </div>
        <h2>Unsere Jugendschutzbeauftragte</h2>
        <PersonCard person={getPersonByName("Nadine Albrecht")} />
      </div>
    </PageBase>
  );
}
