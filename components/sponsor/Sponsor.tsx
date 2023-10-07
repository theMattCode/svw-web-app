import type { Sponsor } from "#/content/sponsor";
import { OptionalLink } from "#/components/link/Link";
import Image from "next/image";
import { calcImageDimensionsForWidth } from "#/lib/image";

type Props = {
  sponsor: Sponsor;
};

export function Sponsor({ sponsor }: Props): JSX.Element | null {
  const dimensions = calcImageDimensionsForWidth(sponsor.image, 192);
  return (
    <OptionalLink
      href={sponsor.url}
      target="_blank"
      className="shadow-xl bg-white p-2 flex justify-center content-center w-full"
    >
      <Image
        src={sponsor.image.url}
        alt={sponsor.name}
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain sm:h-48 h-full w-full"
      />
    </OptionalLink>
  );
}
