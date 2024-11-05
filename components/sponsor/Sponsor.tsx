import type { Sponsor } from "#/content/sponsor";
import { OptionalLink } from "#/components/link/Link";
import Image from "next/image";
import { calcImageDimensionsForHeight } from "#/lib/image";

type Props = {
  sponsor: Sponsor;
};

export function Sponsor({ sponsor }: Props) {
  const { width, height } = calcImageDimensionsForHeight(sponsor.image, 192);
  return (
    <OptionalLink
      href={sponsor.url}
      target="_blank"
      className="shadow-xl bg-white p-2 flex justify-center content-center w-full"
    >
      <Image
        src={sponsor.image.url}
        alt={sponsor.name}
        width={width}
        height={height}
        className="transition-all object-contain sm:h-48 h-full w-full"
      />
    </OptionalLink>
  );
}
