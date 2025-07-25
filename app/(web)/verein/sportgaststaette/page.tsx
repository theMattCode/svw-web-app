import React from "react";
import { SectionTitle } from "#/components/web/section/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { PageContent } from "#/components/web/page/PageContent";
import { sportgaststaette } from "#/content/sitemap";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";

export const metadata: Metadata = {
  title: getTitle(sportgaststaette.name),
};

export default function Sportgaststaette() {
  return (
    <PageContent>
      <SectionTitle title={sportgaststaette.name} />
      <div className="bg-white shadow-2xl p-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col grow">
          <h4>Website</h4>
          <p>
            <Link href="https://sportgaststätte-weiherwiesen.de/" target="_blank">
              https://sportgaststätte-weiherwiesen.de
            </Link>
          </p>
          <h4>E-Mail</h4>
          <p>
            <Link href="mailto:info@weiherwiesen.de">info@weiherwiesen.de</Link>
          </p>
          <h4>Adresse</h4>
          <p>
            Weiherwiesen 5, 72141 Walddorfhäslach (
            <Link href="https://maps.app.goo.gl/85A3Uw7TfvjVmQ2XA" target="_blank">
              Google Maps
            </Link>
            )
          </p>
          <h4>Telefon</h4>
          <p>
            <Link href="tel:+491726633453">+49 172 6633453</Link>
          </p>
          <h4>Öffnungszeiten</h4>
          <table>
            <tbody>
              <tr>
                <td>Montag</td>
                <td>Geschlossen</td>
              </tr>
              <tr>
                <td>Dienstag</td>
                <td>
                  11:30 – 14:00 Uhr
                  <br />
                  17:00 – 22:00 Uhr
                </td>
              </tr>
              <tr>
                <td>Mittwoch</td>
                <td>
                  11:30 – 14:00 Uhr
                  <br />
                  17:00 – 22:00 Uhr
                </td>
              </tr>
              <tr>
                <td>Donnerstag</td>
                <td>
                  11:30 – 14:00 Uhr
                  <br />
                  17:00 – 22:00 Uhr
                </td>
              </tr>
              <tr>
                <td>Freitag</td>
                <td>
                  11:30 – 14:00 Uhr
                  <br />
                  17:00 – 22:00 Uhr
                </td>
              </tr>
              <tr>
                <td>Samstag</td>
                <td>17:00 – 22:00 Uhr</td>
              </tr>
              <tr>
                <td>Sonntag</td>
                <td>11:30 – 22:00 Uhr</td>
              </tr>
              <tr>
                <td>An Feiertagen</td>
                <td>11:30 – 22:00 Uhr</td>
              </tr>
              <tr>
                <td>
                  <b>Mittagstisch</b>
                  <br /> Dienstag bis Freitag
                </td>
                <td>11:30 – 14:00 Uhr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src="/media/verein/sportgaststaette_weiherwiesen_2022.png"
            alt="Geschäftsstelle"
            width={1024}
            height={768}
            className="object-fill"
          />
          <Image
            src="/media/verein/sportgaststaette/2023-08-14-gruppenbild-paechter.jpg"
            alt="Von links nach rechts: 2. Vorsitzende Andrea Speier, Pächterin Rahela Bakic Cackovic, Finanzvorstand Martin Bayer neben dem ganzen Team der Sportgaststätte Weiherwiesen"
            width={1024}
            height={768}
          />
          <p className="w-full flex flex-row justify-end text-sm text-gray-700">
            Von links nach rechts: 2. Vorsitzende Andrea Speier, Pächterin Rahela Bakic Cackovic, Finanzvorstand Martin
            Bayer neben dem ganzen Team der Sportgaststätte Weiherwiesen
          </p>
        </div>
      </div>
    </PageContent>
  );
}
