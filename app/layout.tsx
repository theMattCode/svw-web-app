import "#/styles/globals.css";
import React, { PropsWithChildren, Suspense } from "react";
import Footer from "#/components/footer/Footer";
import { fetchBasicData, fetchMeta } from "#/app/data.gql";
import SponsorGrid from "#/components/sponsor/SponsorGrid";
import { Header } from "#/components/header/Header";
import { Metadata } from "next";
import { getFullAssetUrl } from "#/lib/asset";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchMeta();
  const meta = data?.meta?.data?.attributes;
  return {
    title: meta?.title ?? "",
    description: meta?.description ?? "",
    viewport: "width=device-width, initial-scale=1",
    icons: {
      icon: getFullAssetUrl(meta?.favicon?.data?.attributes?.url ?? ""),
    },
    themeColor: "#057DB1",
  };
}

export default async function Layout({
  children,
}: PropsWithChildren): Promise<JSX.Element> {
  const data = await fetchBasicData();
  const headerData = data?.header?.data?.attributes ?? null;
  const footerData = data?.footer?.data?.attributes ?? null;
  const clubData = data?.club?.data?.attributes ?? null;
  return (
    <html lang="de">
      <head>
        <Suspense>
          <script
            async
            type="text/javascript"
            src="https://www.fussball.de/static/layout/fbde2/egm//js/widget2.js"
          />
        </Suspense>
      </head>
      <body /*className="2xl:bg-[url('/background-2xl.png')] xl:bg-[url('/background-xl.png')] lg:bg-[url('/background-lg.png')] md:bg-[url('/background-md.png')] md:bg-contain md:bg-repeat-y"*/
      >
        <div className="min-h-screen flex flex-col">
          <Header headerData={headerData} clubData={clubData} />
          <main className="flex-1 bg-neutral-100">{children}</main>
          <SponsorGrid sponsors={data.sponsors?.data} />
          <Footer footerData={footerData} clubData={clubData} />
        </div>
      </body>
    </html>
  );
}
