import Link from "next/link";
import { ComponentSharedLinkLists } from "#/lib/graphql/generated";
import CallToActionButton from "#/components/button/CallToActionButton";
import {
  FaChevronRight,
  FaExternalLinkAlt,
  FaShoppingCart,
} from "react-icons/fa";

type Props = { linkList: ComponentSharedLinkLists };

export function LinkList({ linkList }: Props): JSX.Element {
  return (
    <div>
      <span className="font-bold text-lg">
        {linkList.titleUrl ? (
          <Link href={linkList.titleUrl}>{linkList.title}</Link>
        ) : (
          linkList.title
        )}
      </span>
      <ul className="list-none">
        {linkList.pageLinks?.data.map((pageLink) => {
          if (pageLink && pageLink.attributes?.slug) {
            return (
              <li key={`${pageLink.id}-${pageLink.attributes.slug}`}>
                <Link
                  href={pageLink.attributes?.slug}
                  className="flex flex-row gap-x-2 items-center"
                >
                  <FaChevronRight className="text-svw-blue-default" />
                  <span>{pageLink.attributes?.title}</span>
                </Link>
              </li>
            );
          }
        })}
        {linkList?.shopLinks?.data.map((shop) => {
          if (shop && shop.attributes?.url) {
            return (
              <li key={`${shop.id}-${shop.attributes.name}`}>
                <Link
                  key={shop.id}
                  href={shop.attributes.url}
                  target="_blank"
                  className="flex flex-row gap-x-2 items-center"
                >
                  <FaChevronRight className="text-svw-blue-default" />
                  <FaShoppingCart />
                  <span>{shop.attributes.name}</span>
                  <FaExternalLinkAlt className="text-svw-blue-default" />
                </Link>
              </li>
            );
          }
        })}
        {linkList.links?.map((link) => {
          if (link) {
            return (
              <li key={`${link.id}-${link.text?.toLowerCase()}`}>
                <Link href={link.href} target={`_${link.target ?? "self"}`}>
                  {link.text ?? link.href}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
