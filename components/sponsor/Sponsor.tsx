import { SponsorEntity } from "#/lib/graphql/generated";
import { OptionalLink } from "#/app/link/Link";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";

export function Sponsor({
  sponsor,
}: {
  sponsor: SponsorEntity;
}): JSX.Element | null {
  const imageAttributes = sponsor.attributes?.image?.data?.attributes;
  if (imageAttributes) {
    return (
      <OptionalLink
        key={sponsor.id}
        href={sponsor.attributes?.url}
        target="_blank"
      >
        <div className="shadow-xl bg-white p-2 flex justify-center content-center">
          <Image
            src={getFullAssetUrl(imageAttributes?.url)}
            alt={imageAttributes.name}
            width={imageAttributes.width ?? 100}
            height={imageAttributes.height ?? 100}
            className="object-scale-down md:h-48 w-52 md:w-full"
          />
        </div>
      </OptionalLink>
    );
  }
  return null;
}
