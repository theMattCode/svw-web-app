import Link from "next/link";
import { FooterLinkListData } from "#/lib/graphql/homepage.gql";

type Props = { linkList: FooterLinkListData };

export function LinkList({ linkList }: Props): JSX.Element {
  return (
    <div key={linkList.id}>
      <span className="font-bold text-lg">
        {linkList.titleUrl ? <Link href={linkList.titleUrl}>{linkList.title}</Link> : linkList.title}
      </span>
      <ul className="list-none">
        {linkList.pageLinks?.data.map((pageLink) => {
          if (pageLink && pageLink.attributes?.slug) {
            return (
              <li key={pageLink.id}>
                <Link href={pageLink.attributes?.slug}>{pageLink.attributes?.title}</Link>
              </li>
            );
          }
        })}
        {linkList.links?.map((link) => {
          if (link) {
            return (
              <li key={link.id}>
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
