import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";

export default function Yoga() {
  return (
    <PageBase>
      <BlockTitle title="Yoga" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h4>Worum geht es beim Yoga?</h4>
            <p>
              Yoga ist eine bewährte indische Wissenschaft und ein Übungsweg, um innere Harmonie und Ruhe zu finden. Die
              Ausübung der Körperübungen bietet Ihnen die Möglichkeit, sich besser kennenzulernen. Diese Übungsstunden
              sind immer sehr gut besucht.
            </p>
            <p>
              <b>Schnuppern und Vorbeischauen ist immer gern gesehen.</b>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4>Termine Hatha-Yoga</h4>
            <p>Montag 08:30 - 10:00 mit Monika Haar im Gymnastikraum in der Ballspielhalle</p>
            <p>Dienstag 18:30 - 20:00 mit Sandra Dießner im Gymnastikraum in der Ballspielhalle</p>
          </div>
        </div>
        <h4>Übungsleitung</h4>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Monika Haar")} />
          <PersonCard person={getPersonByName("Sandra Dießner")} />
        </div>
      </div>
    </PageBase>
  );
}
