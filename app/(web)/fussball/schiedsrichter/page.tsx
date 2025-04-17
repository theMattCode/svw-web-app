import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { getTitle } from "#/lib/page";
import { PageBase } from "#/components/page/PageBase";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PersonCard } from "#/components/person/PersonCard";
import { ArticlePreviewList } from "#/components/articles/ArticlePreviewList";
import { getPersonByName } from "#/content/people";

export const metadata: Metadata = {
  title: getTitle("Schiedsrichter"),
};

export default function Schiedsrichter() {
  return (
    <PageBase>
      <BlockTitle title="Schiedsrichter" />
      <div className="my-1 bg-white shadow-2xl p-2 flex flex-col gap-2">
        <Image
          src="https://res.cloudinary.com/svwalddorf/image/upload/v1744833165/2025-04-16-Schiedsrichter_vrr1mq.jpg"
          alt="Vereinsschiedsrichter 2024/25"
          width={1600}
          height={1200}
          className="w-full"
        />
        <div className="flex flex-col">
          <p>
            Seit der Saison 2024/25 ist unsere Schiedsrichter-Abteilung auf insgesamt neun Schiedsrichter angewachsen.
          </p>
          <p>
            Neben den bereits langjährigen und erfahrenen Schiedsrichtern Georg Bantel (3.v.l.), Finn Kittelmann
            (2.v.l.) und Björn Kittelmann (4.v.r.) sind sechs neue Schiedsrichter dazugekommen.
          </p>
          <p>
            Mit dem abgeschlossenen Neulingskurs der SRG Reutlingen von Februar/März haben wir nun 6 weitere
            Unparteiische: Fionn Fogl und Moritz Mayer von der B-Jugend sowie Jannis Klees, Peter Braun, Benedikt Dehner
            und Mika Kittelmann von der C-Jugend
          </p>
          <h3>Team</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <PersonCard person={getPersonByName("Georg Bantel")} />
            <PersonCard person={getPersonByName("Björn Kittelmann")} />
            <PersonCard person={getPersonByName("Finn Kittelmann")} />
            <PersonCard person={getPersonByName("Fionn Fogl")} />
            <PersonCard person={getPersonByName("Moritz Mayer")} />
            <PersonCard person={getPersonByName("Jannis Klees")} />
            <PersonCard person={getPersonByName("Peter Braun")} />
            <PersonCard person={getPersonByName("Benedikt Dehner")} />
            <PersonCard person={getPersonByName("Mika Kittelmann")} />
          </div>
        </div>
      </div>
      <ArticlePreviewList tags={["Schiedsrichter"]} />
    </PageBase>
  );
}
