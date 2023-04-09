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

  return (
    <div className="flex flex-col">
      <FaBars className="h-16 mr-6" onClick={() => setOpen((open) => !open)} />
      <div
        className={`fixed right-0 top-16 w-full border-t-2 border-white bg-neutral-300 text-black ${
          open ? "visible z-30" : "hidden"
        }`}
      >
        <ul>
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
    </div>
  );
}

type ItemStyle = {
  border: string;
  background: string;
};

type ItemStyles = {
  [key: number]: ItemStyle;
};
const ITEM_STYLES: ItemStyles = {
  1: {
    border: "border-neutral-400",
    background: "bg-neutral-300",
  },
  2: {
    border: "border-neutral-300",
    background: "bg-neutral-200",
  },
  3: {
    border: "border-neutral-200",
    background: "bg-neutral-100",
  },
  4: {
    border: "border-neutral-100",
    background: "bg-neutral-50",
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
    <li className={`border-b ${itemStyle.border} flex flex-col`}>
      <div className="p-2 flex flex-row justify-between items-center">
        <Link href={page.slug} onClick={onClick}>
          {page.title}
        </Link>
        {hasSubPages && !open && (
          <FaChevronDown onClick={() => setOpen(true)} />
        )}
        {hasSubPages && open && (
          <FaChevronLeft onClick={() => setOpen(false)} />
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
