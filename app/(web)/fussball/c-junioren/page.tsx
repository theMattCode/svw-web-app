import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { PageContent } from "#/components/web/page/PageContent";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle("C-Junioren"),
};

export default function CJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4096, height: 2725 }, 1280);
  return (
    <PageContent>
      <SectionTitle title="C-Junioren" />
      <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/fussball/c-junioren-team-2024-25.jpg"
          alt="Mannschaftsfoto C-Junioren 2024/25"
          width={width}
          height={height}
          className="w-full"
        />
        <div className="flex flex-col">
          <div className="font-light flex">
            <b className="whitespace-nowrap">Reihe 4 (v.l.n.r.):</b>
            <p className="px-2">
              Maxim Laux, Peter Braun, Jannis Klees, Kiyan Sezer, Dilljon Rragomaj, Paul Grotz, Luca Serio, Julian
              Gaiser
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap">Reihe 3 (v.l.n.r.):</b>
            <p className="px-2">
              Devin Cakir, Alexandros Kefaloudis, Chinar Kyose, Paul Kreyßig, Leonas Huthmacher, Leo Kress, Ben-Jakob
              Wien
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap">Reihe 2 (v.l.n.r.):</b>
            <p className="px-2">
              Trainer Björn Kittelmann, Ngolo Kante´, Leandros Tiridis, Dorian Osaj, Flynn Weiss, Fabio Lombardi, Leon
              Trainer Dino Lombardi, Trainer Chris Weiss
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap ">Reihe 1 (v.l.n.r.):</b>
            <p className="px-2">
              Daniel Röhm, Mika Kittelmann, Jonathan Troost, Robin Köhler, Mika Knapp, Noah Bez, Nick Urbanietz, Samuel
              Bäuerle, Tobiasz Gryglik, Kian Bogazkaya
            </p>
          </div>
          <div className="font-light flex">
            <b className="whitespace-nowrap ">Es fehlen:</b>
            <p className="px-2">Marvin Heideck, Neven Martinovic, Benedikt Dehner, Andi Binaj</p>
          </div>
          <h3>Saison 2024/25</h3>
          <p>
            In Saison 2024/25 spielen und trainieren die Kicker der <b>Jahrgänge 2010 (U15) und 2011 (U14)</b> als
            C-Junioren im Aufbaubereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link> mit
            koordinativen, technischen und positionsspezifischer Inhalten sowie grundtaktischer Ausbildung.
          </p>
          <h3>Training Sommer</h3>
          <p>Dienstags und Donnerstags, 18:00 - 19:30 Uhr in Walddorf</p>
          <h3>Training Winter</h3>
          <p>Dienstags und Donnerstags, 18:00 - 19:30 Uhr in Walddorf</p>
          <p>Freitags, 18:00 - 19:30 Uhr in der Gemeindehalle</p>
          <h3>Kontakt</h3>
          <p>
            <Link href="mailto:c-junioren@svwalddorf.de">c-junioren@svwalddorf.de</Link>
          </p>
          <h3>Trainer und Betreuer</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <PersonCard person={getPersonByName("Björn Kittelmann")} />
            <PersonCard person={getPersonByName("Leonardo Lombardi")} />
            <PersonCard person={getPersonByName("Chris Weiß")} />
          </div>
        </div>
      </div>
      <ArticleSection tags={["C-Junioren"]} />
    </PageContent>
  );
}
