import Image from "next/image";
import { MdOutlineDashboard, MdEvent, MdOutlineArticle, MdOutlineLabel, MdOutlinePeopleAlt } from "react-icons/md";
import { Item } from "#/components/cms/navigation/Item";
import { SVWIcon } from "#/components/cms/navigation/SVWIcon";
import { Group } from "#/components/cms/navigation/Group";
import { NavElement } from "#/components/cms/navigation/types";

const elements: NavElement[] = [
  { type: "item", title: "Dashboard", href: "/cms", Icon: MdOutlineDashboard },
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
    <div className="w-full h-full flex flex-col">
      <div></div>
      <div className="flex flex-col gap-2 ">
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
