"use client";

import {
  FaArrowDown,
  FaBars,
  FaChevronDown,
  FaChevronLeft,
} from "react-icons/fa";
import { useState } from "react";
import { HeaderData } from "#/app/data.gql";
import Link from "next/link";
import { Page, PageEntity } from "#/lib/graphql/generated";

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
        className={`fixed right-0 top-16 w-full border-t-2 border-white bg-neutral-200 text-black ${
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

type ListItemProps = {
  page: Page;
  onClick: () => void;
};

function ListItem({ page, onClick }: ListItemProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const hasSubPages = (page.subPages?.data.length ?? 0) > 0;
  return (
    <li key={page.slug} className="border-b border-neutral-300 flex flex-col">
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
        <ul className="bg-neutral-100">
          {page.subPages?.data.map((subPageEntity) => {
            const subPage = subPageEntity.attributes;
            if (subPage) {
              return (
                <li
                  key={subPage.slug}
                  className="p-2 border-b border-neutral-200"
                >
                  <Link href={subPage.slug} onClick={onClick}>
                    {subPage.title}
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
    </li>
  );
}
