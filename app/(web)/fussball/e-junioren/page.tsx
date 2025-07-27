import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTitle } from "#/lib/page";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PersonCard } from "#/components/web/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { ArticleSection } from "#/components/web/articles/ArticleSection";
import { PlayerRow } from "#/app/(web)/fussball/aktive/page";

export const metadata: Metadata = {
  title: getTitle("E-Junioren"),
};

export default function EJunioren() {
  return (
    <div className="bg-neutral-200">
      <Image
        src="https://res.cloudinary.com/svwalddorf/image/upload/v1752230034/2025-26_Mannschaftsfoto_E-Jugend_sguiph.jpg"
        alt="Mannschaftsfoto E-Junioren 2025/26"
        width={1920}
        height={1080}
        className="w-full"
      />
      <div className="container flex flex-col gap-4 p-4">
        <SectionTitle title="Die Mannschaft" />
        <PlayerRow
          rowTitle="Reihe 3 (v.l.n.r.)"
          players="Vincenzo Bonfiglio (Trainer), Erdem Cakir (Trainer), Marc Pomorin, Lio Nimmerfroh, Deni Weinhardt, Louis Schramm, Luis Bayani, Ben Möck, Alexander Kalanidis, Jonathan Sax, Benjamin Hornung, Frederik Weinmann, Ludwig Trautwein, Antonino Bonfiglio (Trainer), Hannes Kopp (Trainer)"
        />
        <PlayerRow
          rowTitle="Reihe 2 (v.l.n.r.)"
          players="Matthäus Mayer (Trainer), Daniel Russom (Trainer), Raphael Rabe, Finn Bronni, Mattheo Saile, Levin Bonfiglio, Dennis Bonfiglio, Fabio Canelli, Tim Neumann, Bence Varju, Adrian Schön, Leandros Koulas, Kristián Huber, Luis Thomas, Florian Schön (Trainer)"
        />
        <PlayerRow
          rowTitle="Reihe 1 (v.l.n.r.)"
          players="Simon Blessing, Mert Ugurlu, Nick Rösinger, Matti Ruoff, Gökay Dangir, Liam Zeh, Levin Cakir, Nils Mayer, Ben Häussler, Vincent Kopp, Luis Susuri"
        />
        <PlayerRow
          rowTitle="Es fehlen"
          players="Maja Mangold, May Kreyßig, Mohammed Salih, Elias Meyer, Lean Russom, Emil Morlok, Ahmad Dawood"
        />
        <SectionTitle title="Trainer und Betreuer" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Antonino Bonfiglio")} />
          <PersonCard person={getPersonByName("Matthäus Mayer")} />
          <PersonCard person={getPersonByName("Daniel Russom")} />
          <PersonCard person={getPersonByName("Hannes Kopp")} />
          <PersonCard person={getPersonByName("Florian Schön")} />
          <PersonCard person={getPersonByName("Vincenzo Bonfiglio")} />
          <PersonCard person={getPersonByName("Erdem Cakir")} />
        </div>
        <div>
          <h3>Saison 2024/25</h3>
          <p>
            In Saison 2024/25 spielen und trainieren die <b>Kicker der Jahrgänge 2015 (U11) und 2016 (U10)</b> als
            E-Junioren im Grundlagenbereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link> mit
            koordinativen und ersten technischen Inhalten sowie Spaß mit vielen Spielformen.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3>Training Sommer</h3>
            <p>Montags, 18:00 - 19:30 Uhr auf dem Rasenplatz in Walddorf</p>
            <p>Mittwochs, 18:00 - 19:30 Uhr auf dem Kunstrasenplatz in Walddorf</p>
            <h3>Training Winter</h3>
            <p>Donnerstag 17:00 - 19:00 Uhr in der Ballspielhalle</p>
          </div>
          <div>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:e-junioren@svwalddorf.de">e-junioren@svwalddorf.de</Link>
            </p>
          </div>
        </div>
        <ArticleSection tags={["E-Junioren"]} />
      </div>
    </div>
  );
}
