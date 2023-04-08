import { SponsorEntity } from "#/lib/graphql/generated";
import { Sponsor } from "#/components/sponsor/Sponsor";

type Props = {
  sponsors?: SponsorEntity[] | null;
};

function shuffle(): number {
  return 0.5 - Math.random();
}

export default function SponsorGrid({ sponsors }: Props): JSX.Element | null {
  if (!sponsors) return null;
  return (
    <div className="bg-white border-t border-svw-blue-default py-4">
      <div className="container">
        <h2 className="flex flex-row justify-center">Unsere Partner</h2>
        <div className="p-3 flex flex-col items-center md:grid md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {sponsors?.sort(shuffle).map((sponsor) => (
            <Sponsor key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </div>
  );
}
