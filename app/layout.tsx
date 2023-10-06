import "#/styles/globals.css";
import React, { PropsWithChildren, Suspense } from "react";
import Footer from "#/components/footer/Footer";
import { fetchBasicData, fetchMeta } from "#/app/data.gql";
import SponsorGrid from "#/components/sponsor/SponsorGrid";
import { Metadata } from "next";
import { getFullAssetUrl } from "#/lib/asset";
import { Navigation } from "#/components/navigation/Navigation";
import { club } from "#/content/club";

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
  const clubData = data?.club?.data?.attributes ?? null;
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

        <header className="bg-svw-blue-dark">hero</header>
        <main className="h-screen">{children}</main>
        <SponsorGrid sponsors={data.sponsors?.data} />
        <Footer footerData={footerData} clubData={clubData} />
      </body>
    </html>
  );
}
