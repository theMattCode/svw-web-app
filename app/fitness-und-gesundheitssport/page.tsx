import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import Link from "next/link";
import { fitUndGesund, gymnastik65plus, powerFitness, teenDance, yoga } from "#/content/sitemap";

export default function FitnessUndGesundheitssport() {
  return (
    <PageBase>
      <BlockTitle title="Fitness und Gesundheitssport" />
      <div className="bg-white shadow-2xl p-2 flex flex-col gap-2">
        <p>
          In unserer Sparte Fitness & Gesundheit bieten wir ein vielfältiges Programm für alle Altersklassen an. Aktuell
          gibt es folgende Gruppen
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <Link href={yoga.url}>{yoga.name}</Link>
              </td>
              <td>Montag</td>
              <td>8:30 - 10:00 Uhr</td>
            </tr>
            <tr>
              <td>
                <Link href={powerFitness.url}>{powerFitness.name}</Link>
              </td>
              <td>Montag</td>
              <td>18:30 - 20:30 Uhr</td>
            </tr>
            <tr>
              <td>
                <Link href={gymnastik65plus.url}>{gymnastik65plus.name}</Link>
              </td>
              <td>Dienstag</td>
              <td>16:30 - 17:30 Uhr</td>
            </tr>
            <tr>
              <td>
                <Link href={yoga.url}>{yoga.name}</Link>
              </td>
              <td>Dienstag</td>
              <td>18:30 - 20:00 Uhr</td>
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
                <Link href={fitUndGesund.url}>{fitUndGesund.name}</Link>
              </td>
              <td>Freitag</td>
              <td>18:30 - 19:30 Uhr</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageBase>
  );
}
