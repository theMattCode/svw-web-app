import { fetchPageData } from "#/components/page/page.gql";
import { Page } from "#/components/page/Page";
import Image from "next/image";

export default async function IndexPage(): Promise<JSX.Element | null> {
  const pageData = await fetchPageData("indexDISABLED");

  if (pageData?.attributes) {
    return (
      <>
        <div className="flex w-screen h-screen bg-svw-blue-default py-8">
          <div
            className="flex flex-col container gap-2 w-full text-white font-bold"
            style={{
              textShadow:
                "1px 0 0 #015d98, 0 -1px 0 #015d98, 0 1px 0 #015d98, -1px 0 0 #015d98",
            }}
          >
            <div className="self-center">
              <div className="text-3xl">Sportverein Walddorf</div>
              <div className="text-4xl italic">Breitensport</div>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 pt-8 italic items-center justify-items-center">
              <HeroSection
                title="Fußball"
                bgImageClass="bg-hero-soccer"
                delay={1}
              />
              <HeroSection
                title="Badminton"
                bgImageClass="bg-hero-badminton"
                delay={1}
              />
              <HeroSection
                title="Teen Dance"
                bgImageClass="bg-hero-teendance"
                delay={1}
              />
              <HeroSection title="Yoga" bgImageClass="bg-hero-yoga" delay={1} />
              <HeroSection
                title="Rehasport"
                bgImageClass="bg-hero-rehasport"
                delay={1}
              />
              <HeroSection
                title="Fitness & Gesundheit"
                bgImageClass="bg-hero-fitness"
                delay={1}
              />
            </div>
          </div>
        </div>
        <Page pageData={pageData.attributes} />
      </>
    );
  }
  return null;
}

function HeroSection({
  title,
  bgImageClass,
  delay = 1,
}: {
  title: string;
  bgImageClass: string;
  delay?: number;
}): JSX.Element {
  return (
    <div
      className={`flex w-full h-full animate-plop md:animate-plop-md xl:animate-plop-xl bg-contain bg-no-repeat bg-center ${bgImageClass}`}
    >
      <div className="h-full w-full flex flex-col justify-center items-center text-center">
        <span>{title}</span>
      </div>
    </div>
  );
}
