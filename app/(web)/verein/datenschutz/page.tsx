import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import Link from "next/link";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { datenschutz } from "#/content/sitemap";

export const metadata: Metadata = {
  title: getTitle(datenschutz.name),
};

export default function Datenschutz() {
  return (
    <PageBase>
      <BlockTitle title={datenschutz.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col lg:flex-row gap-2">
        <div className="w-full flex flex-col gap-2">
          <h3>Datenschutzordnung des SV Walddorf</h3>
          <p>
            Unsere Datenschutzordnung kann&nbsp;
            <Link href="/download/Datenschutzordnung_2019-11-13.pdf">hier heruntergeladen</Link> werden.
          </p>
          <p>
            Grundlage ist die <b>Europäische Datenschutzgrundverordnung (DSGVO)</b>. Sie dient dem Schutz
            personenbezogenen Daten unserer Mitglieder, Übungsleiter, Vereinsfunktionäre sowie alle weiteren Personen,
            von denen der SV Walddorf im Rahmen seiner Vereinstätigkeit Daten verarbeitet. Artikel 6 Abs 1 DSGVO, Satz
            a) bis f) bietet dem Verein dafür die Rechtsgrundlagen. Danach setzt die Verarbeitung bestimmter Daten die
            Zustimmung (Einwilligungserklärung) der betroffenen Person voraus.
          </p>
          <p>
            Bei allen Fragen oder sonstigen Anliegen zum Thema Datenschutz können sie sich jederzeit gerne an unseren
            Datenschutzbeauftragten wenden:&nbsp;
            <Link href="mailto:datenschutz@svwalddorf.de">datenschutz@svwalddorf.de</Link>
          </p>
          <h3>Datenschutz Einwilligungserklärung</h3>
          <p>
            Jedes Mitglied hat nach Artikel 6 Abs 1 DSGVO, Satz a) eine Einwilligungserklärung zum Schutz seiner
            persönlichen Daten abzugeben.
          </p>
          <p>
            <b>Für alle Mitglieder</b> (Seite 2 des Mitgliedsantrages):&nbsp;
            <Link href="/download/Einwilligungserklaerung_Datenschutz_2022-11-19.pdf">
              Einwilligungserklärung SV Walddorf
            </Link>
          </p>
          <p>
            Speziell für unsere <b>Rehasport-Teilnehmer</b>:&nbsp;
            <Link href="/download/Einwilligungserklaerung_Datenschutz_Rehasport_2022-09-22.pdf">
              Einwilligungserklärung Datenschutz für unseren Rehasport
            </Link>
          </p>
          <h3>Vertraulichkeitserklärung</h3>
          <p>
            Mit der Vertraulichkeitserklärung versichert jeder unserer <b>Vereinsfunktionäre und Übungsleiter*innen</b>,
            dass sie unsere Datenschutzbestimmungen kennen und sie mit den ihnen anvertrauten Daten verantwortungsvoll
            umgehen. Die Vertraulichkeitserklärung für unsere Vereinsmitarbeiter können sie&nbsp;
            <Link href="/download/Vertraulichkeitserklaerung_Vereinsmitarbeiter_2021-09-13.pdf">hier einsehen</Link>.
          </p>
          <h3>Briefing für Vereinsmitarbeiter</h3>
          <p>
            Download
            <Link href="/download/Briefing_Vereinsmitarbeiter_zum_Datenschutz_2019-12-07.pdf" target="_blank">
              Briefing für Vereinsmitarbeiter
            </Link>
          </p>
        </div>
      </div>
    </PageBase>
  );
}
