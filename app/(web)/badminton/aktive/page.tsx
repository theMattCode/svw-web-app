import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PageContent } from "#/components/web/page/PageContent";
import { badminton, badmintonAktive } from "#/content/sitemap";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle(badminton.name),
};

export default function Badminton() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4085, height: 2298 }, 1520);
  return (
    <PageContent>
      <SectionTitle title={badmintonAktive.name} />
      <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2 py-2">
        <Image
          src="/media/sparten/badminton/badminton-team-2021-08-22.jpg"
          alt="Badminton Mitglieder"
          width={width}
          height={height}
          className="transition-all self-center"
        />
        <div className="flex flex-col gap-4">
          <p>
            Aufstieg! Nach nur einer Saison im aktiven Spielbetrieb steigt die aktive Mannschaft des SV Walddorf
            ungeschlagen mit 14 Siegen und 0 Unentschieden von der Kreisliga in die Bezirksliga auf. Milena Heim, Julia
            Meyle, Jonas Tittmann, Markus Berndt, Lorenz Fritz, Michael Schäfer, Maximilian Rapp, Julian Petermann
            konnten sich souverän gegen alle Gegner behaupten. Für die nächste Saison bekommt die Mannschaft mit Sabine
            Stoppok und Tao Qin nochmals Verstärkung und stellt sich den Herausforderungen in der Bezirksliga Zollern.
            Wer uns zuschauen und anfeuern möchte, ist herzlich zu unseren Spieltagen eingeladen. Der Eintritt ist
            kostenlos und für gute Verpflegung ist gesorgt.
          </p>
          <h4>Heimspiele</h4>
          <table>
            <tbody>
              <tr className="even:bg-white">
                <td rowSpan={2}>2. Spieltag, 19.10.2024</td>
                <td>15:00 Uhr</td>
                <td>SV Walddorf - TSV Gomaringen</td>
              </tr>
              <tr className="even:bg-white">
                <td>19:00 Uhr</td>
                <td>SV Walddorf - TSV Jungingen</td>
              </tr>
              <tr className="even:bg-white">
                <td rowSpan={2}>4. Spieltag, 23.11.2024</td>
                <td>15:00 Uhr</td>
                <td>SV Walddorf - SV Böblingen 1</td>
              </tr>
              <tr className="even:bg-white">
                <td>19:00 Uhr</td>
                <td>SV Walddorf - Vfl Herrenberg 3</td>
              </tr>
              <tr className="even:bg-white">
                <td>5. Spieltag, 25.01.2025</td>
                <td>15:00 Uhr</td>
                <td>SV Walddorf - Ehningen-Gärtringen 2</td>
              </tr>
              <tr className="even:bg-white">
                <td rowSpan={2}>7. Spieltag, 22.02.2025</td>
                <td>15:00 Uhr</td>
                <td>SV Walddorf - Tus Metzingen 4</td>
              </tr>
              <tr className="even:bg-white">
                <td>19:00 Uhr</td>
                <td>SV Walddorf - TSV Neuhengstett</td>
              </tr>
            </tbody>
          </table>
          <h4>Tabelle und Spielplan</h4>
          <p>
            <Link
              href="https://bwbv-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupPage?championship=SW+24%2F25&group=32832"
              target="_blank"
              className="inline-flex"
            >
              Aktuelle Tabelle <HiOutlineExternalLink />
            </Link>
          </p>
          <p>
            <Link
              href="https://bwbv-badminton.liga.nu/cgi-bin/WebObjects/nuLigaBADDE.woa/wa/groupPage?displayTyp=gesamt&displayDetail=meetings&championship=SW+24%2F25&group=32832"
              target="_blank"
              className="inline-flex"
            >
              Aktueller Spielplan <HiOutlineExternalLink />
            </Link>
          </p>
        </div>
      </div>
      <ArticleSection tags={["Badminton"]} />
    </PageContent>
  );
}
