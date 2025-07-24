import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTitle } from "#/lib/page";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { ArticleSection } from "#/components/web/articles/ArticleSection";
import { PlayerRow } from "#/app/(web)/fussball/aktive/page";

export const metadata: Metadata = {
  title: getTitle("C-Junioren"),
};

export default function CJunioren() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4096, height: 2725 }, 1280);
  return (
    <div className="bg-neutral-200">
      <Image
        src="https://res.cloudinary.com/svwalddorf/image/upload/v1752432425/2056-26_Mannschaftsfoto_C-Jugend_o6rih9.jpg"
        alt="Mannschaftsfoto C-Junioren 2025/26"
        width={1920}
        height={1080}
        className="w-full"
      />
      <div className="container flex flex-col gap-4 p-4">
        <SectionTitle title="C-Junioren" />
        <PlayerRow
          rowTitle="Reihe 3 (v.l.n.r.)"
          players="Luca Müllerschön, Leandros Tiridis, Silas Bader, Paul Grotz, Josip Gavran, Alexandros Kefaloudis, Daniel Röhm, Lias Leitze"
        />
        <PlayerRow
          rowTitle="Reihe 2 (v.l.n.r.)"
          players="Frederik Luik, Filip Böpple, Giovanni Cimmino (Trainer), Chris Weiß (Trainer), Leonardo Lombardi (Trainer), Robin Köhler, Gabriel Barisic"
        />
        <PlayerRow
          rowTitle="Reihe 1 (v.l.n.r.)"
          players="Noah Horvath, Philipp Klimek, Elias Jesch, Ahmad Ammer Laila, Mika Knapp, Fabio Lombardi, Tobias Gryglik, Samuel Bäuerle, Besri Arikan, Nick Urbanietz"
        />
        <PlayerRow
          rowTitle="Es fehlen"
          players="Flynn Weiß, Henrdik, Hahn, Paul Hellwig, Ben Bauer, Ben Schneider, Marlon Endl, Antonio Cimmino"
        />
        <SectionTitle title="Trainer und Betreuer" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Chris Weiß")} />
          <PersonCard person={getPersonByName("Leonardo Lombardi")} />
          <PersonCard person={getPersonByName("Giovanni Cimmino")} />
        </div>
        <h3>Saison 2025/26</h3>
        <p>
          In Saison 2025/26 spielen und trainieren die Kicker der <b>Jahrgänge 2011 (U15) und 2012 (U14)</b> als
          C-Junioren im Aufbaubereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link> mit koordinativen,
          technischen und positionsspezifischer Inhalten sowie grundtaktischer Ausbildung.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3>Training Sommer</h3>
            <p>Dienstags und Donnerstags, 18:00 - 19:30 Uhr in Kirchentellinsfurt</p>
            <h3>Training Winter</h3>
            <p>Dienstags und Donnerstags, 18:00 - 19:30 Uhr in Kirchentellinsfurt</p>
            <p>Freitags, 18:00 - 19:30 Uhr in der Gemeindehalle</p>
          </div>
          <div>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:c-junioren@svwalddorf.de">c-junioren@svwalddorf.de</Link>
            </p>
          </div>
        </div>
        <ArticleSection tags={["C-Junioren"]} />
      </div>
    </div>
  );
}
