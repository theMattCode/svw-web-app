import React from "react";
import { BlockTitle } from "#/components/block-title/BlockTitle";
import { PageBase } from "#/components/page/PageBase";
import { PDFViewer } from "#/components/pdf-viewer/PDFViewer";
import { Metadata } from "next";
import { getTitle } from "#/lib/page";
import { satzung } from "#/content/sitemap";

export const metadata: Metadata = {
  title: getTitle(satzung.name),
};

export default function Satzung() {
  return (
    <PageBase>
      <BlockTitle title={satzung.name} />
      <div className="bg-white shadow-2xl p-2 flex flex-col lg:flex-row gap-2">
        <div className="w-full flex flex-col gap-2">
          <PDFViewer url="/download/Satzung_SV_Waldddorf_2022-03-11.pdf" />
        </div>
      </div>
    </PageBase>
  );
}
