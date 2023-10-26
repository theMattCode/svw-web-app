import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { PDFViewer } from "#/components/pdf-viewer/PDFViewer";
import Image from "next/image";
import { calcImageDimensionsForWidth } from "#/lib/image";
import Link from "next/link";

export default function SVWBlaettle() {
  const imageDimensions = calcImageDimensionsForWidth({ width: 3497, height: 4961 }, 300);
  return (
    <PageBase>
      <BlockTitle title="s'SVW Blättle" />
      <div className="bg-white shadow-2xl p-2 flex flex-col lg:flex-row gap-2">
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col gap-2 md:flex-row">
            <Image
              src="/media/verein/svw_blaettle_2022-2023.png"
              alt="s'SVW Blättle"
              width={imageDimensions.width}
              height={imageDimensions.height}
              className="self-center"
            />
            <div className="flex flex-col">
              <h4>Unsere Vereinszeitschrift &quot;s&apos;SVW Blättle&quot;</h4>
              <p>
                &quot;s&apos;SVW Blättle&quot; wird mit einer aktuellen Berichterstattung über das Vereinsgeschehen
                während der gesamten Saison 2022/2023 bei allen Veranstaltungen, an alle Neu-Mitglieder der Sparten,
                sowie den Heimspielen der I. und II. Mannschaft des SV Walddorf an die Zuschauer verteilt. Ferner wird
                das &quot;SVW Blättle&quot; auch bei Sponsoren und öffentlichen Anlaufpunkten wie dem Rathaus ausliegen.
                Insgesamt hat das SVW Blättle eine Auflage von über 1.000 Stück, welche auch an wechselnde Haushalte der
                Gemeinde Walddorfhäslach verteilt werden.
              </p>
              <h4>Das &quot;s&apos;SVW Blättle&quot; für Sponsoren</h4>
              <p>
                Sie möchten gerne im &quot;s&apos;SVW Blättle&quot; werben und damit uns als Verein unterstützen? Beim
                SVW-Blättle profitieren Sie nicht nur von einer großen Auflagenzahl von über 1000 Stk. und einer breit
                gefächerten Leserschaft durch alle Altersgruppen durch, sondern auch von unserem Ansehen und gutem Image
                in der Region. Nachhaltiger könnte ihre Werbung nicht sein, zudem unser Blättle auch auf FSC-Papier
                europäischer Herkunft und 100% CO<sub>2</sub> neutral lokal in Nürtingen gedruckt wird. Sie sind an
                einer Werbeanzeige interessiert, dann können sie sich gerne an unseren&nbsp;
                <Link href="mailto:martin.bayer@svwalddorf.de">
                  Vorstand Finanzen Martin Bayer (martin.bayer@svwalddorf.de)
                </Link>
                &nbsp; wenden.
              </p>
            </div>
          </div>
          <PDFViewer url="/download/svw_blaettle_web_2022-2023.pdf" />
        </div>
      </div>
    </PageBase>
  );
}
