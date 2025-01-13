import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { PDFViewer } from "#/components/pdf-viewer/PDFViewer";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { svwBlaettle } from "#/content/sitemap";

export const metadata: Metadata = {
  title: getTitle(svwBlaettle.name),
};

export default function SVWBlaettleReinschauen() {
  const imageDimensions = calcImageDimensionsForWidth({ width: 3497, height: 4961 }, 300);
  return (
    <PageBase>
      <BlockTitle title={svwBlaettle.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col lg:flex-row gap-2">
        <PDFViewer url="/download/svw_blaettle_web_2024-2025.pdf" />
      </div>
    </PageBase>
  );
}
