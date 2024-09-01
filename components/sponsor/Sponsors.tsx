import { Sponsor as SponsorType } from "#/content/sponsor";
import { Sponsor } from "#/components/sponsor/Sponsor";

type Props = {
  shuffle?: boolean;
  sponsors: SponsorType[];
};

export function Sponsors({ shuffle, sponsors }: Props) {
  const sortedSponsors = shuffle ? sponsors.sort(() => 0.5 - Math.random()) : sponsors;

  return (
    <div className="transition-all p-3 flex flex-col items-center sm:grid sm:grid-cols-2 gap-4 lg:grid-cols-3">
      {sortedSponsors.map((sponsor) => (
        <Sponsor key={sponsor.name} sponsor={sponsor} />
      ))}
    </div>
  );
}
