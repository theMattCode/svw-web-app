import React from "react";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PageContent } from "#/components/web/page/PageContent";
import { PersonCard } from "#/components/web/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { Metadata } from "next";
import { yoga } from "#/content/sitemap";
import { getTitle } from "#/lib/page";
import Image from "next/image";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle(yoga.name),
};
export default function Yoga() {
  return (
    <PageContent>
      <SectionTitle title={yoga.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 text-justify">
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
            <p>Montag, 08:30 - 10:00 Uhr mit Monika Haar im Gymnastikraum in der Ballspielhalle</p>
            <p>Dienstag, 18:30 - 20:00 Uhr mit Sandra Dießner im Gymnastikraum in der Ballspielhalle</p>
            <Image src="/media/sparten/fitness-und-gesundheitssport/yoga-2.jpg" alt="Yoga" width={768} height={417} />
          </div>
        </div>
        <Image src="/media/sparten/fitness-und-gesundheitssport/yoga-3.jpg" alt="Yoga" width={1376} height={527} />
        <h4>Übungsleitung</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Monika Haar")} />
          <PersonCard person={getPersonByName("Sandra Dießner")} />
        </div>
      </div>
      <ArticleSection tags={["Yoga"]} />
    </PageContent>
  );
}
