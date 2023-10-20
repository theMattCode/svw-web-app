import React from "react";
import { BlockTitle } from "#/components/block/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import Link from "next/link";

export default function Rehasport() {
  return (
    <PageBase>
      <BlockTitle title="Rehasport" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <h3>Zertifizierte Kurse</h3>
        <p>
          <ul className="list-disc px-8">
            <li>
              Alle unsere Kurse sind vom Württembergischen Behinderten- und Rehabilitationsverband (WBRS) anerkannt und
              zertifiziert.
            </li>
            <li>
              Rehabilitationssport (kurz: Rehasport) ist im Sozialgesetzbuch, §64, SGB IX, als ergänzende Leistung zur
              medizinischen Rehabilitation„ festgeschrieben.
            </li>
            <li>
              Unsere Übungsleiter*innen sind speziell ausgebildet und im Besitz einer Rehasport-Lizenz für Orthopädie.
              Sowie einer speziellen Ausbildung für Sport in der Krebsnachsorge.
            </li>
            <li>
              Die Teilnahme an unseren Rehasport-Kursen ist bei Vorliegen einer ärztlicher Verordnung kostenlosDer
              behandelnde Hausarzt oder Facharzt stellt eine Verordnung (Formular 56) für Rehabilitationssport aus.
              Diese muss dann noch durch die Krankenkasse genehmigt werden. Danach kann es losgehen mit dem Rehasport!
            </li>
            <li>In der Regel genehmigt die Krankenkasse 50 Einheiten Rehasport für einem Zeitraum von 18 Monaten.</li>
            <li>
              Ohne Verordnung bieten wir je nach Verfügbarkeit auch die Möglichkeit einer Teilnahme auf eigene Kosten
              an:
              <ul className="list-disc px-8">
                <li>Ticket für Vereinsmitglieder: 50,-€ für 10 Kursstunden a 45 min</li>
                <li>Ticket für Nichtmitglieder: 80,-€ für 10 Kursstunden a 45 min</li>
                <li>
                  Das Ticket gilt für die Dauer von 15 Wochen. Danach verfallen alle nicht wahr genommen Kursstunden.
                  Eine Rückerstattung ist ausgeschlossen. Termine, an denen keine Rehastunde stattfinden kann, (Bsp.:
                  Feiertage) verlängern die Laufzeit entsprechend.
                </li>
              </ul>
            </li>
          </ul>
        </p>
        <p>
          Weitere Informationen zum Thema Rehasport findet man unter&nbsp;
          <Link href="https://www.wbrs-online.net/reha-sport" target="_blank">
            www.wbrs-online.net/reha-sport
          </Link>
          .
        </p>
        <p>IMAGE</p>
        <h3>Kursprogramm</h3>
        <p>IMAGE</p>
        <p>
          Mehr Informationen zum Rehasportkurs &quot;Sport nach Krebs&quot; gibt&apos;s im&nbsp;
          <Link href="/download/Flyer_Rehasport_2022-01-01.pdf">Flyer zum Download</Link>.
        </p>
        <h3>Kontakt</h3>
        <p>
          Sprechen sie uns bitte an. Wir beraten sie gerne, klären gemeinsam mit ihnen, welcher Kurs für sie geeignet
          wäre und schauen nach freien Plätzen.
        </p>
        <p>
          E-Mail: <Link href="mailto:rehasport@svwalddorf.de">rehasport@svwalddorf.de</Link>
        </p>
        <p>
          Telefon: <Link href="tel:+497127580676">07127/580676</Link>
        </p>
        <p>
          Bitte hinterlassen sie eine Nachricht auf dem Anrufbeantworter mit Angabe ihres Namens und ihrer Telefonnummer
          - wir rufen sie schnellstmöglich zurück.
        </p>
        <h3>Veranstaltungsort</h3>
        <p>Alle Kurse finden im großzügigen, 100m² großen Gymnastikraum der Ballspielhalle Walddorfhäslach statt.</p>
        <p>IMAGES</p>
      </div>
    </PageBase>
  );
}
