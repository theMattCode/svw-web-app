import Image from "next/image";
import { Image as ImageInfo } from "#/content/image";
import { calcImageDimensionsForWidth } from "#/lib/image";

export function CardImage({ image }: { image: ImageInfo }) {
  const { width, height } = image ? calcImageDimensionsForWidth(image, 1024) : { width: 0, height: 0 };
  return (
    <Image
      src={image.src}
      alt={image.alt ?? ""}
      width={width}
      height={height}
      quality={85}
      className="object-cover aspect-16/9 @5xl:w-72"
    />
  );
}
