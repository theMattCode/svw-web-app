import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTitle } from "#/lib/page";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { ArticleSection } from "#/components/web/articles/ArticleSection";
import { PlayerRow } from "#/app/(web)/fussball/aktive/page";

export const metadata: Metadata = {
  title: getTitle("D-Junioren"),
};

export default function DJunioren() {
  return (
    <div className="bg-neutral-200">
      <Image
        src="https://res.cloudinary.com/svwalddorf/image/upload/v1752230035/2025-26_Mannschaftsfoto_D-Jugend_assnwd.jpg"
        alt="Mannschaftsfoto D-Junioren 2025/26"
        width={1920}
        height={1080}
        className="w-full"
      />
      <div className="container flex flex-col gap-4 p-4">
        <SectionTitle title="Die Mannschaft" />
        <PlayerRow
          rowTitle="Reihe 3 (v.l.n.r.)"
          players="Trainer Mike Bauer, Luis Pommersbach, Noah, Benedikt Beer, Niklas Luik Ari Urbanietz, Benedikt Schmidt, Mio Walker, Liam Dingelstedt, David Futter, David Frey, Mohamed Adouni, Henry Gärtner, Trainer Tobias Klees"
        />
        <PlayerRow
          rowTitle="Reihe 2 (v.l.n.r.)"
          players="Trainer Björn Schmidt, Gabriel Heim, Julian Gmehling, David Rösch, Lennox Mayer, Lean Martinovic, Henry Linde, Chris Bauer, Robin Gartenmaier, Sem Thiess, Nabil Noorwali, Julius Schwarz, Trainer Arif Akkoc, Trainer Tobias Rösch"
        />
        <PlayerRow
          rowTitle="Reihe 1 (v.l.n.r.)"
          players="Leon Dietrich, Enes Zenen, Moritz Walker, Tom Laufer, Lias Kittelberger, Benn Thomas, Yusuf Bulut, Adam Khouia, Chrstiano Turco"
        />
        <PlayerRow
          rowTitle="Es fehlen"
          players="Adrian Krammer, Benno Walker, Emil Knötzsch, Lasse Reck, Levin Akkoc, Liam Woehlk, Magnus Salat, Mailo Wiggers, Moritz Starke, Raphael Renz, Thilo Klees"
        />
        <SectionTitle title="Trainer und Betreuer" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Tobias Klees")} />
          <PersonCard person={getPersonByName("Mike Bauer")} />
          <PersonCard person={getPersonByName("Björn Schmidt")} />
          <PersonCard person={getPersonByName("Tobias Rösch")} />
          <PersonCard person={getPersonByName("Arif Akkoc")} />
        </div>
        <div>
          <h3>Saison 2025/26</h3>
          <p>
            In Saison 2025/26 spielen und trainieren die Kicker der <b>Jahrgänge 2013 (U13) und 2014 (U12)</b> als
            D-Junioren im Aufbaubereich der <Link href="/fussball/akademie">SV Walddorf Akademie</Link> mit
            koordinativen, technischen und positionsspezifischer Inhalten sowie grundtaktischer Ausbildung.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h3>Training Sommer</h3>
            <p>Montags, 18:00 - 19:30 Uhr auf dem Kunstrasenplatz in Walddorf</p>
            <p>Mittwochs, 18:00 - 19:30 Uhr auf dem Platz in Kirchentellinsfurt</p>
            <h3>Training Winter</h3>
            <p>Mittwoch 17:30 - 19:30 Uhr in der Ballspielhalle Walddorf</p>
          </div>
          <div>
            <h3>Kontakt</h3>
            <p>
              <Link href="mailto:d-junioren@svwalddorf.de">d-junioren@svwalddorf.de</Link>
            </p>
          </div>
        </div>
        <ArticleSection tags={["D-Junioren"]} />
      </div>
    </div>
  );
}
