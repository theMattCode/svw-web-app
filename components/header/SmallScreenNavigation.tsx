"use client";

import { FaBars, FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { HeaderData } from "#/app/data.gql";
import Link from "next/link";
import { Page } from "#/lib/graphql/generated";

type Props = {
  headerData: HeaderData | null;
};

export default function SmallScreenNavigation({
  headerData,
}: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((open) => !open);

  return (
    <div className="flex flex-col justify-center">
      <button
        className="w-10 h-10 flex justify-center items-center"
        onClick={toggleOpen}
      >
        <FaBars />
      </button>
      <ul
        className={`absolute right-0 top-16 w-full border-t-2 border-white bg-svw-blue-darker text-white ${
          open ? "visible z-30" : "hidden"
        }`}
      >
        {headerData?.navigationLinks?.data.map((menuItem) => {
          const page = menuItem.attributes;
          if (page) {
            return (
              <ListItem
                key={page.slug}
                level={1}
                page={page}
                onClick={() => setOpen(false)}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

type ItemStyle = {
  border: string;
  background: string;
  text: string;
};

type ItemStyles = {
  [key: number]: ItemStyle;
};
const ITEM_STYLES: ItemStyles = {
  1: {
    border: "border-svw-blue-darkest",
    background: "bg-svw-blue-darker",
    text: "text-white",
  },
  2: {
    border: "border-svw-blue-darker",
    background: "bg-svw-blue-dark",
    text: "text-white",
  },
  3: {
    border: "border-svw-blue-dark",
    background: "bg-svw-blue-default",
    text: "text-black",
  },
  4: {
    border: "border-svw-blue-default",
    background: "bg-neutral-50",
    text: "text-black",
  },
};

type ListItemProps = {
  page: Page;
  onClick: () => void;
  level: number;
};

function ListItem({ page, onClick, level }: ListItemProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const hasSubPages = (page.subPages?.data.length ?? 0) > 0;
  const itemStyle = ITEM_STYLES[level];
  return (
    <li
      className={`border-b ${itemStyle.border} last:border-b-0 flex flex-col`}
    >
      <div className="flex flex-row justify-between items-center">
        <Link className="w-full p-2" href={page.slug} onClick={onClick}>
          {page.title}
        </Link>
        {hasSubPages && (
          <button
            className="w-10 h-10 flex justify-center items-center"
            onClick={() => setOpen((open) => !open)}
          >
            {open ? <FaChevronDown /> : <FaChevronLeft />}
          </button>
        )}
      </div>
      {hasSubPages && open && (
        <ul className={ITEM_STYLES[level + 1].background}>
          {page.subPages?.data.map((subPageEntity) => {
            const subPage = subPageEntity.attributes;
            if (subPage) {
              return (
                <ListItem
                  key={subPage.slug}
                  level={level + 1}
                  page={subPage}
                  onClick={onClick}
                />
              );
            }
            return null;
          })}
        </ul>
      )}
    </li>
  );
}
