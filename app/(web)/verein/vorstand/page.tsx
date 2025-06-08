import React from "react";
import { getPersonByTag, getPersonName } from "#/content/people";
import { PersonCard } from "#/components/person/PersonCard";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PageContent } from "#/components/web/page/PageContent";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { vorstand } from "#/content/sitemap";

export const metadata: Metadata = {
  title: getTitle(vorstand.name),
};

export default function Vorstand() {
  const people = [
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
    <PageContent>
      <SectionTitle title={vorstand.name} />
      <div className="transition-all grid grid-cols-1 xl:grid-cols-2 gap-2">
        {people.map((person, index) => (
          <PersonCard
            person={person}
            // If person is undefined, we made the mistake when collecting people or defining them in the content folder
            key={person ? getPersonName(person) : index}
          />
        ))}
      </div>
    </PageContent>
  );
}
