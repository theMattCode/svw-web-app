import Image from "next/image";
import { Announcement } from "#/content/announcements";
import { calcImageDimensionsForWidth } from "#/lib/image";

type Props = {
  announcement: Announcement;
};

export function AnnouncementItem({ announcement }: Props) {
  const image = announcement.image;
  const imageDimensions = calcImageDimensionsForWidth(image, 288);
  return (
    <div className="min-w-full p-2">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Image
            className="w-full md:w-72 md:min-w-[18rem] h-80 md:h-44 object-cover"
            src={image.src}
            alt={image.alt}
            width={imageDimensions.width}
            height={imageDimensions.height}
          />
          <div className="">
            <h2>{announcement.title}</h2>
            {/*<RichText content={announcement.attributes?.description} />*/}
          </div>
        </div>
      </div>
    </div>
  );
}
