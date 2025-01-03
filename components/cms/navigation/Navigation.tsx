import Image from "next/image";
import {
  MdClose,
  MdEvent,
  MdOutlineArticle,
  MdOutlineDashboard,
  MdOutlineLabel,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { Item } from "#/components/cms/navigation/Item";
import { SVWIcon } from "#/components/cms/navigation/SVWIcon";
import { Group } from "#/components/cms/navigation/Group";
import { NavElement } from "#/components/cms/navigation/types";
import { Fragment } from "react";

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

export function Navigation({ open, onClose }: { open: boolean; onClose?: () => void }) {
  return (
    <div
      className={`absolute transition-all top-0 ${open ? "left-0" : "-left-64 @5xl:left-0"} h-full z-40 @5xl:relative bg-gray-50 @5xl:border-r @5xl:border-r-gray-200`}
    >
      <div className="relative h-full flex flex-col gap-2 w-64 pr-4">
        <div className="p-2 flex items-center gap-2">
          <Image src="/media/svw-emblem.svg" alt="SVW Emblem" width={48} height={48} />
          <span className="uppercase font-medium text-lg flex items-center grow">SVW CMS</span>
          <span className="uppercase font-medium text-lg flex items-center grow-0 @5xl:hidden" onClick={onClose}>
            <MdClose />
          </span>
        </div>
        {elements.map((element) =>
          element.type === "item" ? (
            <Item item={element} onClick={onClose} key={element.title} />
          ) : (
            <Fragment key={element.title}>
              <Group group={element} />
              {element.items.map((item) => (
                <Item item={item} onClick={onClose} key={item.title} />
              ))}
            </Fragment>
          ),
        )}
      </div>
    </div>
  );
}
