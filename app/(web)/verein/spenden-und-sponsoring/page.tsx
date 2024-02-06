import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import Link from "next/link";
import { PageBase } from "#/components/page/PageBase";
import { findItemByName, sponsoring, verein } from "#/content/sitemap";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";

export const metadata: Metadata = {
  title: getTitle(sponsoring.name),
};

export default function SpendenUndSponsoring() {
  return (
    <PageBase>
      <BlockTitle title={sponsoring.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col lg:flex-row gap-2">
        <div className="flex flex-col gap-2">
          <h5>Sie wollen den SV Walddorf durch eine Spende unterstützen? Darüber freuen wir uns natürlich sehr!</h5>
          <p>
            Der Sportverein Walddorf hat in den letzten Jahren den Bereich der Jugendarbeit in den Sportarten Fußball,
            Badminton, Kindertanz und Gymnastik massiv ausgebaut. Wir möchten auch in Zukunft viel für die Jugend und
            unsere Mitglieder leisten.
          </p>
          <p>
            Wie Sie wissen, ist dies bei unserer finanziell eingeschränkter Situation nicht immer selbstverständlich.
            Ihre Spende wird garantiert ausschließlich für den Sportbetrieb verwendet.
          </p>
          <p>Neben finanziellen Zuwendungen gibt es natürlich auch diverse Möglichkeiten des Sponsoring:</p>
          <ul className="px-8 list-disc text-sm font-light">
            <li>Werbebande</li>
            <li>Anzeigen im Stadionheft</li>
            <li>Sponsoring direkt hier auf der Homepage</li>
            <li>Sachspenden, z.B. Trikotsätze für eine unsere Jugendmannschaften mit ihrem Firmenlogo</li>
          </ul>
          <p>
            Über jegliche Zuwendung freuen wir uns sehr. Wenden sie sich jederzeit an ein&nbsp;
            <Link href={findItemByName(verein, "Vorstand")?.url ?? ""}>Mitglied des Vorstandes</Link>
            &nbsp;oder an einen Ansprechpartner in der entsprechenden Abteilung.
          </p>
          <h5>Wir sind befugt Spendenbescheinigungen auszustellen.</h5>
          <p>
            Spendenkonto SV Walddorf e.V.
            <br />
            Vereinigte Volksbanken e.G.
            <br />
            IBAN: DE75 6039 0000 0714 2820 14
          </p>
        </div>
      </div>
    </PageBase>
  );
}
