import "#/styles/globals.css";
import React, { PropsWithChildren } from "react";
import Footer from "#/components/footer/Footer";
import SponsorGrid from "#/components/sponsor/SponsorGrid";
import { Metadata } from "next";
import { Navigation } from "#/components/navigation/Navigation";
import { club } from "#/content/club";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: club.short,
    description: "Webseite von SV Walddorf 1904 e.V.",
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
        <Footer />
      </body>
    </html>
  );
}
