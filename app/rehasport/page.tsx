import React from "react";
import { BlockTitle } from "#/components/block/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import Link from "next/link";
import Image from "next/image";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { calcImageDimensionsForWidth } from "#/lib/image";

export default function Rehasport() {
  const wegZurBallsporthalleDimensions = calcImageDimensionsForWidth({ width: 775, height: 389 }, 850);
  const trainingsraumDimensions = calcImageDimensionsForWidth({ width: 4160, height: 2080 }, 850);
  return (
    <div className="bg-neutral-200 pb-8 px-2">
      <div className="container flex flex-col gap-2">
        <div className="transition-all md:pt-0 w-full bg-hero-rehasport bg-cover bg-center">
          <div className="w-full bg-svw-blue-default bg-opacity-60 h-80" />
        </div>
        <BlockTitle title="Rehasport" />
        <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
          <h3>Zertifizierte Kurse</h3>
          <p>
            <ul className="list-disc px-8">
              <li>
                Alle unsere Kurse sind vom Württembergischen Behinderten- und Rehabilitationsverband (WBRS) anerkannt
                und zertifiziert.
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
          <Image
            src="/media/sparten/rehasport/dosb+rehasportgruppe-2020-01-01.jpg"
            alt="DOSB und Rehasportgruppe"
            width={960}
            height={127}
          />
          <h3>Was ist Rehasport?</h3>
          <p>
            Rehabilitationssport (kurz Rehasport) ist ein ärztlich verordnetes <b>Bewegungstraining in der Gruppe</b>
            &nbsp;und bietet die Möglichkeit durch Sport selbst aktiv Einfluss auf die eigene Gesundheit zu nehmen.
          </p>
          <p>
            Ziel des Rehasports ist es, die medizinische Behandlung mit Hilfe von körperlicher Bewegung zu fördern und
            zu ergänzen. <b>Für Menschen mit Beschwerden am Stütz- und Bewegungsapparat</b> ist der Rehabilitationssport
            ein adäquates Mittel zur Schmerzlinderung und zur Steigerung des Wohlbefindens. Rehasport kann auch
            eingesetzt werden als <b>Fortsetzung einer ambulanten oder stationären Rehabilitation</b>. Zudem werden
            durch das gemeinsame Trainieren in der Gruppe auch <b>psychosoziale Ziele</b> erreicht.
          </p>
          <p>
            Um einen Anspruch auf Rehabilitationssport zu haben, müssen bestimmte Voraussetzungen gegeben sein. So muss
            entweder eine <b>körperliche oder seelische Erkrankung</b> vorliegen, welche dauerhafte Einschränkungen nach
            sich ziehen kann, eine <b>chronische Krankheit</b> oder belastende Umwelteinflüsse, die zu dauerhaften
            Erkrankungen beisteuern. Das kann zum Beispiel bei Rückenschmerzen oder Rheuma der Fall sein. Der Rehasport
            wird den Betroffenen durch den behandelnden Arzt bei medizinischer Notwendigkeit durch eine Verordnung
            verschrieben.
          </p>
          <h4>Ziele des Rehasports</h4>
          <p>
            <ul className="list-disc px-8">
              <li>Wiederherstellung der seelischen oder körperlichen Gesundheit</li>
              <li>Stärkung von Ausdauer und Kraft</li>
              <li>Verbesserung der Koordination und Flexibilität</li>
              <li>Stärkung des Selbstbewusstseins, so etwa bei Menschen mit Behinderungen oder Depressionen</li>
            </ul>
          </p>
          <h3>Kursprogramm</h3>
          <Image
            src="/media/sparten/rehasport/kursprogramm-2022-09-15.jpg"
            alt="Rehasport Kursprogramm"
            width={1364}
            height={729}
          />
          <p>
            Mehr Informationen zum Rehasportkurs &quot;Sport nach Krebs&quot; gibt&apos;s im&nbsp;
            <Link href="/download/Flyer_Rehasport_2022-01-01.pdf">Flyer zum Download</Link>.
          </p>
          <h4>Unsere Rehasport-ÜbungsleiterInnen</h4>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
            <PersonCard person={getPersonByName("Ingrid Hartlieb")} />
            <PersonCard person={getPersonByName("Sandra Kalestra")} />
            <PersonCard person={getPersonByName("Lisa Stauch")} />
          </div>
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
            Bitte hinterlassen sie eine Nachricht auf dem Anrufbeantworter mit Angabe ihres Namens und ihrer
            Telefonnummer - wir rufen sie schnellstmöglich zurück.
          </p>
          <h3>Veranstaltungsort</h3>
          <p>Alle Kurse finden im großzügigen, 100m² großen Gymnastikraum der Ballspielhalle Walddorfhäslach statt.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <Image
              src="/media/sparten/rehasport/weg-zur-ballsporthalle-2020.jpg"
              alt="Weg zur Ballsporthalle"
              width={wegZurBallsporthalleDimensions.width}
              height={wegZurBallsporthalleDimensions.height}
            />
            <Image
              src="/media/2020/2020-ballsporthalle-trainingsraum.jpg"
              alt="Trainingsraum"
              width={trainingsraumDimensions.width}
              height={trainingsraumDimensions.height}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
