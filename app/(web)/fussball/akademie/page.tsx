import React from "react";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { PageBase } from "#/components/page/PageBase";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import Image from "next/image";
import { calcImageDimensionsForWidth } from "#/lib/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

export const metadata: Metadata = {
  title: getTitle("SV Walddorf Akademie"),
};

export default function SVWalddorfAkademie() {
  const { width, height } = calcImageDimensionsForWidth({ width: 767, height: 651 }, 500);
  return (
    <PageBase>
      <BlockTitle title="SV Walddorf Akademie" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="flex flex-col">
          <p>
            Unsere SV Walddorf Akademie wurde auf Grundlage unserer Strukturreform 2018 ins Leben gerufen. Aufgeteilt
            auf drei Bereiche werden von unseren Trainern und Trainerinnen die verschiedenen spezifische Inhalte für die
            einzelne Altersgruppen vermittelt.
          </p>
          <Image
            src="/media/sparten/fussball/sv-walddorf-akademie.png"
            alt="SV Walddorf Akademie"
            width={width}
            height={height}
            className="place-self-center p-4"
          />
          <p>
            Über unsere fest verankerte Spiel- und Trainingsphilosophie sollen unsere Spielerinnen und Spieler auch
            mittels neuer Trainingsmethoden die Inhalte von Grund verinnerlichen. Wir wollen eine zielgerichtete
            Entwicklung unserer jungen Talente gewährleisten und diese auf ihrem Weg von den Bambinis bis zu den
            A-Junioren und darüber hinausbegleiten. Zu diesen Methoden gehören unter anderem:
          </p>
          <ul className="list-disc list-outside ml-4 font-light">
            <li>
              Das&nbsp;
              <Link
                href="https://www.coaching-eye.de/"
                target="_blank"
                className="text-svw-blue-dark font-medium underline inline-flex"
              >
                Coaching Eye <HiOutlineExternalLink />
              </Link>
              &nbsp;auf unserer Sportanlage, mit dem Trainingseinheiten oder Spiele aufgezeichnet werden können. Mit der
              passenden Software können Sequenzen analysiert werden und die Erkenntnisse in die Trainingsarbeit
              einfließen.
            </li>
            <li>
              Das &nbsp;
              <Link
                href="https://blazepod.eu/"
                target="_blank"
                className="text-svw-blue-dark font-medium underline inline-flex"
              >
                Blaze Pods System <HiOutlineExternalLink />
              </Link>
              &nbsp; wodurch mittels einzelner farblich leuchtender Pads die Reaktions- und Handlungsschnelligkeit
              geschult werden kann.
            </li>
            <li>
              Der <i>Multifunktionsraum</i> bietet nicht nur Möglichkeiten zur Spielanalyse und -vorbereitung sondern
              auch außerhalb der Trainingszeiten moderne Fitnessgeräte zum individuellen Training.
            </li>
          </ul>
          <p>
            An dieser Stelle soll zu guter Letzt auch erwähnt sein, dass die Anschaffung solcher Infrastruktur ohne
            unsere Sponsoren nicht möglich wäre. Ein riesiges Dankeschön an dieser Stelle!
          </p>
          <div className="flex place-content-center gap-4 p-4">
            <Link href="https://www.coaching-eye.de/" target="_blank">
              <Image
                src="/media/sparten/fussball/coaching-eye-logo.png"
                alt="Coaching Eye Logo"
                width={200}
                height={200}
              />
            </Link>
            <Link href="https://blazepod.eu/" target="_blank">
              <Image src="/media/sparten/fussball/blazepod-logo.png" alt="BLAZEPOD Logo" width={200} height={200} />
            </Link>
          </div>
        </div>
      </div>
    </PageBase>
  );
}
