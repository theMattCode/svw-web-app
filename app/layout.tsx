import "#/styles/globals.css";
import React, { PropsWithChildren } from "react";
import Footer from "#/components/footer/Footer";
import { fetchBasicData } from "#/app/data.gql";
import Sponsors from "#/components/sponsors/Sponsors";
import { Header } from "#/components/header/Header";

export default async function Layout({
  children,
}: PropsWithChildren): Promise<JSX.Element> {
  const data = await fetchBasicData();
  const headerData = data?.header?.data?.attributes ?? null;
  const footerData = data?.footer?.data?.attributes ?? null;
  const clubData = data?.club?.data?.attributes ?? null;
  return (
    <html lang="de">
      <body /*className="2xl:bg-[url('/background-2xl.png')] xl:bg-[url('/background-xl.png')] lg:bg-[url('/background-lg.png')] md:bg-[url('/background-md.png')] md:bg-contain md:bg-repeat-y"*/
      >
        <div className="min-h-screen flex flex-col">
          <Header headerData={headerData} />
          <main className="flex-1 bg-neutral-100 pb-8">{children}</main>
          <Sponsors sponsors={data.sponsors?.data} />
          <Footer footerData={footerData} clubData={clubData} />
        </div>
      </body>
    </html>
  );
}
