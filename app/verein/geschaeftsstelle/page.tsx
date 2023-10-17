import React from "react";
import { BlockTitle } from "#/components/block/BlockTitle";
import Link from "next/link";
import Image from "next/image";
import { PageBase } from "#/components/page/PageBase";

export default function Geschaeftsstelle() {
  return (
    <PageBase>
      <BlockTitle title="Geschäftsstelle" />
      <div className="bg-white shadow-2xl p-2 flex gap-4 flex-col lg:flex-row">
        <Image
          src="/media/verein/geschaeftsstelle_2023.jpg"
          alt="Geschäftsstelle"
          width={1123}
          height={683}
          className="lg:w-1/2"
        />
        <div className="flex flex-col">
          <p className="font-light">
            Unsere Geschäftsstelle befindet sich in unserem Sportheim auf dem
            Sportgelände Weiherwiesen.
          </p>
          <h3>Kontakt</h3>
          <h4>Adresse</h4>
          <p>
            Weiherwiesen 5, 72141 Walddorfhäslach (
            <Link
              href="https://maps.app.goo.gl/o1xKaHZN7sAexotr7"
              target="_blank"
            >
              Google Maps
            </Link>
            )
          </p>
          <h4>Telefon</h4>
          <p>
            <Link href="tel:+497127580015">07127/580015 (AB).</Link>
            <br />
            Unsere Geschäftsstelle ist nicht durchgehend besetzt. Bitte
            hinterlassen sie auf dem Anrufbeantworter eine Nachricht, wir rufen
            sie baldmöglichst zurück.
          </p>
          <h4>E-Mail</h4>
          <p>
            <Link href="mailto:info@svwalddorf.de">info@svwalddorf.de</Link>
          </p>
        </div>
      </div>
    </PageBase>
  );
}
