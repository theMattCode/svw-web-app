import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";

export default function Yoga() {
  return (
    <PageBase>
      <BlockTitle title="Yoga" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h4>Yoga für mehr Wohlbefinden</h4>
            <p>
              Überlegst du noch, oder machst du schon Yoga? So oder so: Wie wäre es, wenn du Montag morgens, 8:30 Uhr,
              an unserem Yogakurs teilnimmst? Dieser Kurs ist perfekt, um mit positiver Energie und Gelassenheit in den
              Tag und die Woche zu starten. Das Beste daran: Es sind keinerlei Voraussetzungen erforderlich. Jeder,
              unabhängig von Alter, Fitness, Beweglichkeit oder Vorkenntnissen, Mann oder Frau kann jederzeit
              einsteigen.
            </p>
            <p>
              Yoga ist eine bewährte indische Wissenschaft und ein Übungsweg, um innere Harmonie und Ruhe zu finden. Die
              Durchführung der Körperübungen bietet Ihnen die Möglichkeit, sich besser kennenzulernen. In unserem Kurs
              werden wir eine harmonische Mischung aus sanften Asanas (Yoga-Haltungen), Pranayama (Atemtechniken) und
              Meditation praktizieren. Dies ermöglicht es Dir Deinen Körper zu kräftigen, Flexibilität aufzubauen und
              deinen Geist zu beruhigen. Unsere erfahrenen Yogalehrer werden dich dabei begleiten, deine eigene Praxis
              zu entwickeln.
            </p>
            <p>
              Mach dich auf den Weg zu einem gesunden und ausgeglichenen Lebensstil! Durch regelmäßige Yogapraxis kannst
              du nicht nur Stress reduzieren oder deine Konzentration verbessern, sondern ein ganz neues Lebensgefühl
              voller Wohlbefinden und Ausgeglichenheit entwickeln. Also, nicht lange überlegen, vorbeikommen und Yoga
              machen!
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
      <ArticlePreviewList tags={["Yoga"]} />
    </PageBase>
  );
}
