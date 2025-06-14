import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PageContent } from "#/components/web/page/PageContent";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { fitUndGesund } from "#/content/sitemap";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle(fitUndGesund.name),
};

export default function FitUndGesund() {
  const wegZurBallsporthalleDimensions = calcImageDimensionsForWidth({ width: 775, height: 389 }, 850);
  const trainingsraumDimensions = calcImageDimensionsForWidth({ width: 4160, height: 2080 }, 850);
  const teamDimensions = calcImageDimensionsForWidth({ width: 6000, height: 4000 }, 1280);
  const team2Dimensions = calcImageDimensionsForWidth({ width: 3711, height: 2784 }, 768);
  return (
    <PageContent>
      <SectionTitle title={fitUndGesund.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/fitness-und-gesundheitssport/fit-und-gesund-2024-1.jpg"
          alt="Fit und Gesund Team"
          width={teamDimensions.width}
          height={teamDimensions.height}
          className="w-full"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 text-justify">
            <h4>Gutes für deinen ganzen Körper</h4>
            <p>Dieses Gymnastikangebot richtet sich an Frauen und Männer die ihrem Körper etwas Gutes tun wollen.</p>
            <p>
              Der Kurs bietet ein abwechslungsreiches und intensives Ganzkörpertraining an. Zu Beginn wird bei flotter
              Musik das Herzkreislaufsystem und die Koordination des Körpers gefordert und gestärkt. Im Anschluss wird
              der gesamte Körper und Problemzonen wie Rücken, Bauch, Beine und Po gekräftigt.
            </p>
            <p>
              Mit dem Einsatz von Handgeräten werden die jeweiligen Übungen intensiviert. Gezielte Dehnungs- und
              Entspannungsübungen runden das Training ab und sorgen für den nötigen Ausgleich.
            </p>
            <p>
              <b>Schnuppern und Vorbeischauen ist immer gern gesehen.</b>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Übungszeiten</h4>
            <p>Freitag 18.30 – 19.30 Uhr im Gymnastikraum in der Ballspielhalle</p>
            <Image
              src="/media/sparten/fitness-und-gesundheitssport/fit-und-gesund-2024-2.jpg"
              alt="Fit und Gesund Team"
              width={team2Dimensions.width}
              height={team2Dimensions.height}
            />
          </div>
        </div>
        <h4>Übungsleitung</h4>
        <PersonCard person={getPersonByName("Silvana Kern")} />
        <h3>Veranstaltungsort</h3>
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
      <ArticleSection tags={["Fit und Gesund"]} />
    </PageContent>
  );
}
