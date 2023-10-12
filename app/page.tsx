import { Hero } from "#/components/Hero/hero";
import { Announcements } from "#/components/announcements/Announcements";

export default async function IndexPage(): Promise<JSX.Element | null> {
  return (
    <div className="flex flex-col">
      <Hero />
      <Announcements />
    </div>
  );
}
