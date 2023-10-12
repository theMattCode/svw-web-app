import { Sponsor } from "#/components/sponsor/Sponsor";
import { sponsors } from "#/content/sponsor";
import { Sponsors } from "#/components/sponsor/Sponsors";

type Props = {
  shuffle?: boolean;
};

function shuffleFn(): number {
  return 0.5 - Math.random();
}

export default function SponsorGrid({ shuffle = false }: Props) {
  return (
    <div className="bg-svw-blue-dark border-t-4 border-svw-blue-default py-1">
      <div className="transition-all container">
        <h2 className="flex flex-row justify-center text-white">
          Unsere Partner
        </h2>
        <Sponsors shuffle={shuffle}>
          {sponsors.map((sponsor) => (
            <Sponsor key={sponsor.name} sponsor={sponsor} />
          ))}
        </Sponsors>
      </div>
    </div>
  );
}
