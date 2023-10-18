"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

type Props = {
  url: string;
};

export function PDFViewer({ url }: Props) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
      <div className="w-full h-[calc(100vh-200px)] ml-auto mr-auto">
        <Viewer fileUrl={url} plugins={[defaultLayoutPluginInstance]} defaultScale={1} />
      </div>
    </Worker>
  );
}
