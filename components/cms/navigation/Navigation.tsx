import Image from "next/image";
import { MdEvent, MdOutlineArticle, MdOutlineLabel, MdOutlinePeopleAlt } from "react-icons/md";
import { Item } from "#/components/cms/navigation/Item";
import { SVWIcon } from "#/components/cms/navigation/SVWIcon";
import { Group } from "#/components/cms/navigation/Group";
import { NavElement } from "#/components/cms/navigation/types";

const elements: NavElement[] = [
  { type: "item", title: "Verein", href: "/cms/club", Icon: SVWIcon },
  {
    type: "group",
    title: "Sammlungen",
    items: [
      { type: "item", title: "Artikel", href: "/cms/articles", Icon: MdOutlineArticle },
      { type: "item", title: "Personen", href: "/cms/people", Icon: MdOutlinePeopleAlt },
      { type: "item", title: "Events", href: "/cms/events", Icon: MdEvent },
      { type: "item", title: "Tags", href: "/cms/tags", Icon: MdOutlineLabel },
    ],
  },
];

export function Navigation() {
  return (
    <div className="w-full h-full flex flex-col pr-6">
      <div className="w-full p-4 flex gap-2">
        <Image src="/media/svw-emblem.svg" alt="SVW Emblem" width={48} height={48} />
        <div className="font-medium text-xl text-center content-center">Sportverein Walddorf 1904 e.V.</div>
      </div>
      <div className="flex flex-col gap-2">
        {elements.map((element) => {
          return element.type === "item" ? (
            <Item title={element.title} href={element.href} Icon={element.Icon} key={element.title} />
          ) : (
            <Group title={element.title} items={element.items} key={element.title} />
          );
        })}
      </div>
    </div>
  );
}
