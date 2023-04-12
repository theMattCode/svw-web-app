import { SponsorEntity } from "#/lib/graphql/generated";
import { OptionalLink } from "#/components/link/Link";
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
        href={sponsor.attributes?.url}
        target="_blank"
        className="shadow-xl bg-white p-2 flex justify-center content-center w-full"
      >
        <Image
          src={getFullAssetUrl(imageAttributes?.url)}
          alt={imageAttributes.name}
          width={imageAttributes.width ?? 100}
          height={imageAttributes.height ?? 100}
          className="object-contain sm:h-48 h-full w-full"
        />
      </OptionalLink>
    );
  }
  return null;
}
