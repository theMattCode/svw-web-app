import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { PDFViewer } from "#/components/pdf-viewer/PDFViewer";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { jugendschutz } from "#/content/sitemap";
import { PersonCard } from "#/components/person/PersonCard";

export const metadata: Metadata = {
  title: getTitle(jugendschutz.name),
};

export default function Jugendschutz() {
  return (
    <PageBase>
      <BlockTitle title={jugendschutz.name} />
      <PersonCard
        person={{
          firstname: "Andrea",
          lastname: "Speier",
          email: "jugendschutz@svwalddorf.de",
          image: { src: "/media/people/andrea-speier-2023.png", alt: "Andrea Speier", width: 193, height: 256 },
          tags: ["Jugendschutzbeauftragte"],
        }}
      />
      <div className="bg-white shadow-2xl p-2 flex flex-col lg:flex-row gap-2">
        <div className="w-full flex flex-col gap-2">
          <PDFViewer url="/download/2024-05-27_Jugendschutzordnung.pdf" />
        </div>
      </div>
    </PageBase>
  );
}
