import { AnnouncementEntity } from "#/lib/graphql/generated";
import Link from "next/link";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import RichText from "#/components/richtext/RichText";

type Props = {
  announcement: AnnouncementEntity;
};

export function Announcement({ announcement }: Props) {
  const image = announcement.attributes?.image?.data?.attributes;
  return (
    <div className="min-w-full p-2">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {image?.url && (
            <Image
              className="w-full md:w-72 md:min-w-[18rem] h-80 md:h-44 object-cover"
              src={getFullAssetUrl(image.url)}
              alt=""
              width={image.width ?? 0}
              height={image.height ?? 0}
            />
          )}
          <div className="">
            <h2>{announcement.attributes?.title}</h2>
            <RichText content={announcement.attributes?.description} />
          </div>
        </div>
      </div>
    </div>
  );
}
