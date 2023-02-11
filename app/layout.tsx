import "#/styles/globals.css";
import React, { PropsWithChildren } from "react";
import Header from "#/components/header/Header";
import Footer from "#/components/footer/Footer";
import { fetchHomepageData } from "#/lib/graphql/homepage.gql";
import Sponsors from "#/components/sponsors/Sponsors";

export default async function Layout({
  children,
}: PropsWithChildren): Promise<JSX.Element> {
  const data = await fetchHomepageData();
  const homepageData = data?.homepage?.data?.attributes;
  return (
    <html lang="de">
      <body /*className="2xl:bg-[url('/background-2xl.png')] xl:bg-[url('/background-xl.png')] lg:bg-[url('/background-lg.png')] md:bg-[url('/background-md.png')] md:bg-contain md:bg-repeat-y"*/
      >
        <div className="min-h-screen flex flex-col">
          <Header
            menuItems={
              homepageData?.subPages?.data.map((page) => ({
                title: page.attributes?.title ?? "",
                slug: page.attributes?.slug ?? "",
                subPages: page.attributes?.subPages,
              })) ?? []
            }
            logo={homepageData?.logo?.data?.attributes?.url}
            socialMedia={
              homepageData?.socialMedia?.map((socialMedia) => socialMedia!!) ??
              []
            }
          />
          <main className="flex-1">{children}</main>
          <Sponsors sponsors={data.sponsors?.data} />
          <Footer contact={homepageData?.contact} {...homepageData?.footer} />
        </div>
      </body>
    </html>
  );
}
