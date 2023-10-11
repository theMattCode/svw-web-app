import { Sponsor } from "#/components/sponsor/Sponsor";
import { sponsors as sponsorData } from "#/content/sponsor";

type Props = {
  shuffle?: boolean;
};

function shuffleFn(): number {
  return 0.5 - Math.random();
}

export default function SponsorGrid({ shuffle = false }: Props): JSX.Element {
  const sponsors = shuffle ? sponsorData?.sort(shuffleFn) : sponsorData;
  return (
    <div className="bg-svw-blue-dark border-t-4 border-svw-blue-default py-1">
      <div className="transition-all container">
        <h2 className="flex flex-row justify-center text-white">
          Unsere Partner
        </h2>
        <div className="transition-all p-3 flex flex-col items-center sm:grid sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {sponsors.map((sponsor) => (
            <Sponsor key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </div>
  );
}
