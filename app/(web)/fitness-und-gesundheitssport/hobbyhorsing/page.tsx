import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { hobbyHorsing } from "#/content/sitemap";
import { getTitle } from "#/lib/page";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: getTitle(hobbyHorsing.name),
};

export default function HobbyHorsing() {
  return (
    <PageBase>
      <BlockTitle title={hobbyHorsing.name} />
      <div className="py-1 flex flex-col gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="bg-white p-2 flex flex-col gap-2 text-justify">
            <h4>Reite deine Fantasie!</h4>
            <p>
              Wir freuen uns, euch unseren brandneuen Hobbyhorsing-Kurs im Rahmen unseres Sportangebotes „Spiel und
              Spaß“ beim Sportverein Walddorf vorzustellen! Taucht ein in die wunderbare Welt des Hobbyhorsing und
              erlebt gemeinsam mit uns einzigartige Abenteuer auf dem Rücken eurer eigenen, handgemachten Pferde!
            </p>
            <h4>Was ist Hobbyhorsing?</h4>
            <p>
              HobbyHorsing ist eine faszinierende Sportart, bei der ihr euch auf Holz- oder Plüschpferden reitend voll
              und ganz in eure eigene Fantasiewelt hineinversetzen könnt. Mit eurer Kreativität gestaltet ihr euer Pferd
              und lasst eure Träume und Vorstellungen lebendig werden. Wie mit dem echten Pferd machen wir im Training
              sowohl Dressur-, als auch Springübungen. Und natürlich kümmern wir uns intensiv um das Aussehen und
              Wohlbefinden unseres HobbyHorses.
            </p>
            <h4>Unser Kursangebot</h4>
            <p>
              Unser Hobbyhorsing-Kurs bietet euch die perfekte Möglichkeit, diese aufregende Sportart zu erlernen und
              euer Geschick im Umgang mit eurem eigenen Hobbyhorse zu verbessern. Egal, ob ihr Anfänger seid oder
              bereits erste Erfahrungen gesammelt habt – unser erfahrener Trainer wird euch unterstützen und euch
              Schritt für Schritt in die Welt des Hobbyhorsing einführen.
            </p>
            <h4>Warum ihr dabei sein solltet</h4>
            <p>
              <ul>
                <li>Entdeckt eine einzigartige, kreative Sportart.</li>
                <li>Verbessert eure motorischen Fähigkeiten und Koordination.</li>
                <li>Knüpft neue Freundschaften in einer offenen und freundlichen Gemeinschaft.</li>
                <li>Genießt die Freiheit, eure Fantasie auszuleben und zu reiten, wohin euch euer Herz führt.</li>
              </ul>
            </p>
          </div>
          <div className="bg-white p-2 flex flex-col gap-2">
            <h4>Kursdetails</h4>
            <p>
              <ul>
                <li>
                  Beginn: <b>4. April 2025</b>
                </li>
                <li>
                  Kursdauer: <b>13 Übungseinheiten</b>{" "}
                  <span className="text-sm">
                    (sollten Termine wegen Verhinderung des Übungsleiters oder aus anderen Umständen ausfallen, werden
                    diese am Ende angehängt)
                  </span>
                </li>
                <li>
                  Immer <b>freitags, 16:00 – 18:00 Uhr</b>
                </li>
                <li>
                  Kinder im Alter von <b>9 bis 15 Jahre</b>
                </li>
                <li>Kursgebühr: €18,- für Vereinsmitglieder, €65,- für Nichtmitglieder</li>
                <li>Ort: Spiegelraum in der Ballspielhalle</li>
              </ul>
            </p>
            <h4>Was ihr braucht</h4>
            <p>
              <ul>
                <li>Euer eigenes Hobbyhorse. Für alle, die noch keins haben, geben wir gerne Tipps zur Herstellung.</li>
                <li>Sportkleidung</li>
                <li>Sportschuhe</li>
                <li>Getr&auml;nk</li>
              </ul>
            </p>
            <h4>Anmeldung</h4>
            <p>Die Plätze sind begrenzt, daher empfehlen wir euch, euch rechtzeitig anzumelden. Anmeldeschluss ist der <b>1. April 2025</b>.</p>
            <p>
              Bitte das&nbsp;
              <Link href="/download/2025-03-06_Anmeldeformular_HobbyHorsing_Kurs_H-2025-1.pdf" target="_blank">
                Anmeldeformular
              </Link>
              &nbsp;vollständig ausgef&uuml;llt und unterschrieben an&nbsp;
              <Link href="mailto:kerstin.fischer@svwalddorf.de">Kerstin Fischer</Link> schicken.
            </p>
            <p>
              Lasst uns gemeinsam in die faszinierende Welt des HobbyHorsing eintauchen! Wir freuen uns schon jetzt
              darauf, euch beim SV Walddorf begrüßen zu dürfen.
            </p>
          </div>
        </div>
      </div>
      <ArticlePreviewList tags={["Hobby Horsing"]} />
    </PageBase>
  );
}
