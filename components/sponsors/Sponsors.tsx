import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import { SponsorEntity } from "#/lib/graphql/generated";
import { OptionalLink } from "#/app/link/Link";

type Props = {
  sponsors?: SponsorEntity[] | null;
};

function shuffle(): number {
  return 0.5 - Math.random();
}

export default function Sponsors({ sponsors }: Props): JSX.Element | null {
  if (!sponsors) return null;
  return (
    <div className="border-t border-svw-blue-default">
      <div className="container">
        <h2 className="flex flex-row justify-center">Unsere Partner</h2>
        <div className="p-3 flex flex-col items-center md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 xl:grid-cols-4">
          {sponsors?.sort(shuffle).map((sponsor) => {
            const imageAttributes = sponsor.attributes?.image?.data?.attributes;
            if (imageAttributes) {
              return (
                <OptionalLink
                  key={sponsor.id}
                  href={sponsor.attributes?.url}
                  target="_blank"
                >
                  <Image
                    src={getFullAssetUrl(imageAttributes?.url)}
                    alt={imageAttributes.name}
                    width={imageAttributes.width ?? 100}
                    height={imageAttributes.height ?? 100}
                    className="object-scale-down md:h-32 w-52 md:w-full"
                  />
                </OptionalLink>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
