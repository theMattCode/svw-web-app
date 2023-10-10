import "#/styles/globals.css";
import React, { PropsWithChildren } from "react";
import Footer from "#/components/footer/Footer";
import { fetchBasicData, fetchMeta } from "#/app/data.gql";
import SponsorGrid from "#/components/sponsor/SponsorGrid";
import { Metadata } from "next";
import { Navigation } from "#/components/navigation/Navigation";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchMeta();
  const meta = data?.meta?.data?.attributes;
  return {
    title: meta?.title ?? "",
    description: meta?.description ?? "",
    viewport: "width=device-width, initial-scale=1",
    icons: {
      icon: "/favicon.ico",
    },
    themeColor: "#057DB1",
  };
}

export default async function Layout({
  children,
}: PropsWithChildren): Promise<JSX.Element> {
  const data = await fetchBasicData();
  const footerData = data?.footer?.data?.attributes ?? null;
  return (
    <html lang="de">
      <head>
        <script
          async
          type="text/javascript"
          src="https://www.fussball.de/static/layout/fbde2/egm//js/widget2.js"
        />
      </head>
      <body className="flex flex-col">
        <Navigation />

        <main className="">{children}</main>
        <SponsorGrid />
        <Footer footerData={footerData} />
      </body>
    </html>
  );
}
