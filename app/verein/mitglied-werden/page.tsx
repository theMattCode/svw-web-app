import React from "react";
import { BlockTitle } from "#/components/block/BlockTitle";
import Link from "next/link";
import { PageBase } from "#/components/page/PageBase";

export default function MitgliedWerden() {
  return (
    <PageBase>
      <BlockTitle title="Mitglied werden" />
      <div className="bg-white shadow-2xl p-2 flex flex-col lg:flex-row gap-2">
        <div className="flex flex-col gap-2">
          <h5>Sie wollen Mitglied beim SV Walddorf werden? Wunderbar!</h5>
          <p>
            Die <b>Eintrittserklärung</b> sowie die&nbsp;
            <b>Einwilligungserklärung zum Datenschutz</b> können sie direkt{" "}
            <Link href="/download/Eintrittserklaerung_mit_Datenschutz_Sportverein_Walddorf_1904_e_V.pdf">
              hier herunterladen
            </Link>
            .
          </p>
          <p>
            Diese beiden Dokumente einfach ausfüllen, unterschreiben und dann
            an&nbsp;
            <Link href="mailto:info@svwalddorf.de">info@svwalddorf.de</Link>
            &nbsp; mailen oder per Post an&nbsp;
            <b>SV Walddorf, Weiherwiesen 5, 72141 Walddorfhäslach</b> senden.
            Alternativ können sie die Dokumente natürlich auch selbst in den
            Briefkasten am Kabineneingang einwerfen.
          </p>
          <p>
            Mehr Informationen zum Thema Datenschutz beim SV Walddorf sowie
            unsere&nbsp;
            <Link href="/verein/datenschutz">Datenschutzordnung</Link>
            &nbsp; finden sie hier.
          </p>
          <p>
            Wenn sie sich genauer über unsere Mitgliedsbeiträge informieren
            wollen, finden sie hier die aktuelle&nbsp;
            <Link href="/download/Beitragsordnung_SV_Walddorf_2020-07-10.pdf">
              Beitragsordnung
            </Link>
            .
          </p>
          <h5>
            Sie sind bereits Mitglied beim SV Walddorf oder beim TV Häslach und
            wollen in Zukunft die Sportangebote beider Vereine zu attraktiven
            Konditionen nutzen?
          </h5>
          <p>
            Dann können sie ihre seitherige Mitgliedschaft zu einer
            Kombimitgliedschaft erweitern. Dazu müssen sie lediglich den&nbsp;
            <Link href="/download/Aenderungsantrag_Kombimitgliedschaft_2020.pdf">
              Änderungsantrag zur Mitgliedschaft
            </Link>
            &nbsp; ausfüllen und an uns senden.
          </p>
          <p>
            Bei Wahl der Kombimitgliedschaft bitte zusätzlich das Formular
            Änderungsantrag zur Mitgliedschaft ausfüllen.
          </p>
          <p>
            <b>Wichtiger Hinweis:</b> Die Kombimitgliedschaft bezieht sich auf
            die jeweiligen Hauptvereine. Die Vereine können darüber hinaus
            zusätzliche Gebühren und Beiträge, wie z.B. Spartenbeiträge,
            erheben. Details entnehmen sie bitte den jeweiligen Beitrags- und
            Gebührenordnungen der Vereine.
          </p>
          <h5>
            Haben sie noch Fragen oder benötigen sie Hilfe beim Ausfüllen der
            Formulare?
          </h5>
          <p>
            Dann kontaktieren sie uns bitte unter&nbsp;
            <Link href="mailto:info@svwalddorf.de">info@svwalddorf.de</Link>
          </p>
          <h5>Kündigung der Vereinsmitgliedschaft</h5>
          <p>
            Die Kündigung der Mitgliedschaft ist nur zum Jahresende zulässig und
            muss spätestens bis 31.12. eines Jahres beim Verein eingehen. Sie
            ist entweder schriftlich an die Vereinsadresse zu richten:&nbsp;
            <b>SV Walddorf, Weiherwiesen 5, 72141 Walddorfhäslach</b> oder per
            E-Mail an
            <Link href="mailto:info@svwalddorf.de">info@svwalddorf.de</Link> zu
            senden.
          </p>
        </div>
      </div>
    </PageBase>
  );
}