import React from "react";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { PageContent } from "#/components/web/page/PageContent";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { fussballAH } from "#/content/sitemap";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle(fussballAH.name),
};
export default function AH() {
  return (
    <PageContent>
      <SectionTitle title={fussballAH.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <p>
          Für alle fußballbegeisterten Spieler ab 30 Jahren, die Lust haben, in einer lockeren und freundschaftlichen
          Atmosphäre ihrem Lieblingssport nachzugehen.
        </p>
        <p>
          Das Training der AH findet einmal pro Woche am Mittwochabend um 19:30 Uhr statt und richtet sich an alle, die
          den Spaß am Fußball in den Vordergrund stellen möchten. Egal ob ehemaliger Leistungssportler oder Hobbykicker
          und egal in welchem Alter – jeder, der Freude am Spiel hat und Teil einer fußballverrückten Truppe sein
          möchte, ist herzlich willkommen.
        </p>
        <p>
          Im Fokus steht dabei der gemeinsame Spaß am Fußball und die Kameradschaft. Unser Ziel ist es, das
          wöchentlichen Training mit einem geselligen Miteinander zu verbinden, ohne den Leistungsdruck des aktiven
          Ligabetriebs.
        </p>
        <p>
          Wer Interesse hat, kann sich gerne direkt bei Benjamin Link oder Daniel Russom melden oder einfach zu einem
          Training vorbeikommen.
        </p>
        <p>
          Wir freuen uns auf zahlreiche neue und alte Gesichter und darauf, gemeinsam die AH des SV Walddorf wieder
          aufleben zu lassen.
        </p>

        <h2>Trainingszeiten</h2>
        <p>Immer mittwochs, 19:30 Uhr auf dem Rasen- oder Kunstrasenplatz</p>
        <h3>Ansprechpartner</h3>
        <PersonCard person={getPersonByName("Benjamin Link")} />
        <PersonCard person={getPersonByName("Daniel Russom")} />
      </div>
      <ArticleSection tags={["AH"]} />
    </PageContent>
  );
}
