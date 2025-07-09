import Image from "next/image";
import { Announcement } from "#/content/announcements";
import { calcImageDimensionsForWidth } from "#/lib/image";
import Markdown from "#/components/markdown/Markdown";

type Props = {
  announcement: Announcement;
};

export function AnnouncementItem({ announcement }: Props) {
  const image = announcement.image;
  const imageDimensions = calcImageDimensionsForWidth(image, 320);
  return (
    <div className="min-w-full">
      <div className="container flex place-content-center">
        <div className="w-full shadow-lg bg-white flex flex-col md:flex-row">
          <Image
            className="w-full md:w-72 md:min-w-[18rem] object-cover"
            src={image.src}
            alt={image.alt ?? announcement.title}
            width={imageDimensions.width}
            height={imageDimensions.height}
          />
          <div className="flex flex-col gap-4 p-4">
            <div className="font-medium text-xl">{announcement.title}</div>
            <Markdown content={announcement.mdContent} />
          </div>
        </div>
      </div>
    </div>
  );
}
