import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { PDFViewer } from "#/components/pdf-viewer/PDFViewer";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { jugendschutzordnung } from "#/content/sitemap";

export const metadata: Metadata = {
  title: getTitle(jugendschutzordnung.name),
};

export default function Jugendschutzordnung() {
  return (
    <PageBase>
      <BlockTitle title={jugendschutzordnung.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col lg:flex-row gap-2">
        <div className="w-full flex flex-col gap-2">
          <PDFViewer url="/download/2024-05-27_Jugendschutzordnung.pdf" />
        </div>
      </div>
    </PageBase>
  );
}
