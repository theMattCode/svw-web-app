import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import Link from "next/link";
import Image from "next/image";
import { PageBase } from "#/components/page/PageBase";

export default function Sportgaststaette() {
  return (
    <PageBase>
      <BlockTitle title="Sportgaststätte Weiherwiesen" />
      <div className="bg-white shadow-2xl p-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col grow">
          <h3>Kontakt</h3>
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
          <h3>Öffnungszeiten</h3>
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
            </tbody>
          </table>
        </div>
        <Image
          src="/media/verein/sportgaststaette_weiherwiesen_2022.png"
          alt="Geschäftsstelle"
          width={1320}
          height={853}
          className="object-fill"
        />
      </div>
    </PageBase>
  );
}
