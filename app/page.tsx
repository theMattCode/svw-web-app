import { Hero } from "#/components/Hero/hero";

export default async function IndexPage(): Promise<JSX.Element | null> {
  return (
    <div className="flex ">
      <Hero />
    </div>
  );
}
