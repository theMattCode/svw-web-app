import React from "react";
import { BlockTitle } from "#/components/block/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import Image from "next/image";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";

export default function FitUndGesund() {
  const wegZurBallsporthalleDimensions = calcImageDimensionsForWidth({ width: 775, height: 389 }, 850);
  const trainingsraumDimensions = calcImageDimensionsForWidth({ width: 4160, height: 2080 }, 850);
  return (
    <PageBase>
      <BlockTitle title="Fit und Gesund" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/fitness-und-gesundheitssport/fit-und-gesund-2019.jpg"
          alt="Fit und Gesund Team"
          width={756}
          height={343}
          className="w-full"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h4>Gutes für deinen ganzen Körper</h4>
            <p>
              Dieses Gymnastikangebot richtet sich an Frauen und Männer die ihrem Körper etwas Gutes tun wollen. Der
              Kurs bietet ein abwechslungsreiches und intensives Ganzkörpertraining an. Zu Beginn wird bei flotter Musik
              das Herzkreislaufsystem und die Koordination des Körpers gefordert und gestärkt. Im Anschluss wird der
              gesamte Körper und Problemzonen wie: Rücken, Bauch, Beine und Po gekräftigt. Mit dem Einsatz von
              Handgeräten werden die jeweiligen Übungen intensiviert. Gezielte Dehnungs- und Entspannungsübungen runden
              das Training ab und sorgen für den nötigen Ausgleich.
            </p>
            <p>
              <b>Schnuppern und Vorbeischauen ist immer gern gesehen.</b>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Übungszeiten</h4>
            <p>Freitag 18.30 – 19.30 Uhr im Gymnastikraum in der Ballspielhalle</p>
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
    </PageBase>
  );
}
