import React from "react";
import { getPersonByTag, getPersonName, people } from "#/content/people";
import { PersonCard } from "#/components/person/PersonCard";
import { BlockTitle } from "#/components/block/BlockTitle";
import { PageBase } from "#/components/page/PageBase";

export default function Vorstand() {
  const vorstand = [
    getPersonByTag("1. Vorsitzender"),
    getPersonByTag("2. Vorsitzende"),
    getPersonByTag("Schriftführer"),
    getPersonByTag("Vorstand Finanzen"),
    getPersonByTag("Vorstand Sport"),
    getPersonByTag("Vorstand Anlagen und Inventar"),
    getPersonByTag("Vorstand Ehrenamt"),
    getPersonByTag("Vorstand Kommunikation"),
  ];

  return (
    <PageBase>
      <BlockTitle title="Vorstand" />
      {vorstand.map((person, index) => (
        <PersonCard
          person={person}
          // If person is undefined, we made the mistake when collecting people or defining them in the content folder
          key={person ? getPersonName(person) : index}
        />
      ))}
    </PageBase>
  );
}
