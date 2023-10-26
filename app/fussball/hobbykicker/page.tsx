import React from "react";
import Image from "next/image";
import { PageBase } from "#/components/page/PageBase";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import Link from "next/link";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { calcImageDimensionsForWidth } from "#/lib/image";

export default function HobbyKicker() {
  const { width, height } = calcImageDimensionsForWidth({ width: 4026, height: 2041 }, 1200);
  return (
    <PageBase>
      <BlockTitle title="Hobbymannschaft/AH" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="/media/sparten/fussball/hobby-kicker-team-2023-24.png"
          alt="Mannschaftsfoto Hobby-Kicker 2023/24"
          width={width}
          height={height}
        />
        <p>
          Ob Kreisligalegende, Hobbykicker oder Neueinsteiger - wir sind eine bunt gemischte Truppe, die jeden Montag
          und Mittwoch zum Tanz bittet.
        </p>
        <p>
          Dieser &quot;Tanz&quot; besteht hauptsächlich aus Spielformen & Kicks auf dem Groß- und Kleinfeld. Als Zugabe
          gibt es die &quot;dritte Halbzeit&quot;, die bei uns natürlich auch nicht zu kurz kommt. Neben den klassischen
          Trainingseinheiten messen wir uns regelmäßig gegen andere Hobbymannschaften der Umgebung in
          Freundschaftsspielen und Elfmeterturnieren.
        </p>
        <p>
          Für diejenigen, die dem kompetitiven Fußball noch nicht ganz Lebewohl sagen wollen, bieten wir durch unsere
          Teilnahme an der Groß- und Kleinfeldrunde des württembergischen Fußballverbandes attraktive Wettbewerbe auf
          ordentlichem Niveau.
        </p>
        <p>
          Du bist daran interessiert, die Hobbykicker des SV Walddorfs kennenzulernen und ein paar Beinschüsse zu
          verteilen? Dann komm einfach an einem der unten genannten Termine vorbei - wir freuen uns auf dich!
        </p>
        <p>
          <b>WANN?</b> Jeden Montag & Mittwoch 19:30 Uhr
        </p>
        <p>
          <b>WO?</b> Sportplatz Weiherwiesen, SV Walddorf
        </p>
        <p>
          <b>WER?</b> Hobbykicker, AH, ehemalige Aktive, Neueinsteiger - jeder!
        </p>
        <h3>Ansprechpartner</h3>
        <PersonCard person={getPersonByName("Lukas Drexler")} />
      </div>
    </PageBase>
  );
}
