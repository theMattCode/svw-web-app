import React, { PropsWithChildren } from "react";
import Footer from "#/components/footer/Footer";
import SponsorGrid from "#/components/sponsor/SponsorGrid";
import { Metadata, Viewport } from "next";
import { Navigation } from "#/components/navigation/Navigation";
import { club } from "#/content/club";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: club.short,
    description: "Webseite von SV Walddorf 1904 e.V.",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#057DB1",
  width: "device-width",
  initialScale: 1,
};

export default async function Layout({ children }: PropsWithChildren): Promise<JSX.Element> {
  return (
    <html lang="de">
      <head>
        <script async type="text/javascript" src="https://www.fussball.de/static/layout/fbde2/egm//js/widget2.js" />
      </head>
      <body className="flex flex-col">
        <Navigation />

        <main className="">{children}</main>
        <SponsorGrid shuffle={true} />
        <Footer />
      </body>
    </html>
  );
}
