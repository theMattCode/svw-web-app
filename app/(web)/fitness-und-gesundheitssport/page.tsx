import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  fitnessUndGesundheitssport,
  fitUndGesund,
  gymnastik65plus,
  powerFitness,
  steelDarts,
  teenDance,
  yoga,
} from "#/content/sitemap";
import { getTitle } from "#/lib/page";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import { PageContent } from "#/components/web/page/PageContent";
import { PersonCard } from "#/components/person/PersonCard";
import { getPersonByName } from "#/content/people";
import { ArticleSection } from "#/components/web/articles/ArticleSection";

export const metadata: Metadata = {
  title: getTitle(fitnessUndGesundheitssport.name),
};

export default function FitnessUndGesundheitssport() {
  return (
    <PageContent>
      <SectionTitle title={fitnessUndGesundheitssport.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <p>
          In unserer Sparte Fitness & Gesundheit bieten wir ein vielfältiges Programm für alle Altersklassen an. Aktuell
          gibt es folgende Gruppen
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <Link href={yoga.url}>{yoga.name}</Link> mit Monika Haar
              </td>
              <td>Montag</td>
              <td>8:30 - 10:00 Uhr</td>
            </tr>
            <tr>
              <td>
                <Link href={powerFitness.url}>{powerFitness.name}</Link> mit Andrea Troglauer
              </td>
              <td>Montag</td>
              <td>
                18:30 - 19:30 Uhr
                <br />
                19:30 - 20:30 Uhr
              </td>
            </tr>
            <tr>
              <td>
                <Link href={gymnastik65plus.url}>{gymnastik65plus.name}</Link> mit Bärbel Neumann
              </td>
              <td>Dienstag</td>
              <td>17:00 - 18:00 Uhr</td>
            </tr>
            <tr>
              <td>
                <Link href={yoga.url}>{yoga.name}</Link> mit Sandra Dießner
              </td>
              <td>Dienstag</td>
              <td>18:30 - 20:00 Uhr</td>
            </tr>
            <tr>
              <td>
                <Link href={steelDarts.url}>{steelDarts.name}</Link> mit Marc Musse & Rainer Burkhard
              </td>
              <td>Mittwoch</td>
              <td>18:00 - 21:00 Uhr</td>
            </tr>
            <tr>
              <td>
                <Link href={teenDance.url}>{teenDance.name} (verschiedene Gruppen)</Link>
              </td>
              <td>Donnerstag</td>
              <td>15:30 - 18:30 Uhr</td>
            </tr>
            <tr>
              <td>
                <Link href={fitUndGesund.url}>{fitUndGesund.name}</Link> mit Silvana Kern
              </td>
              <td>Freitag</td>
              <td>18:30 - 19:30 Uhr</td>
            </tr>
          </tbody>
        </table>
        <h3>Spartenleitung</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <PersonCard person={getPersonByName("Monika Haar")} />
          <PersonCard person={getPersonByName("Claudia Musse")} />
          <PersonCard person={getPersonByName("Marc Musse")} />
        </div>
      </div>
      <ArticleSection tags={["Fitness und Gesundheitssport"]} />
    </PageContent>
  );
}
