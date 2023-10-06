import { ClubData, FooterData } from "#/app/data.gql";
import { LinkList } from "#/components/linklist/LinkList";
import { club } from "#/content/club";

type FooterProps = {
  footerData: FooterData | null;
  clubData: ClubData | null;
};

export default function Footer({ footerData }: FooterProps): JSX.Element {
  return (
    <footer className="bg-neutral-200 border-t-4 border-svw-blue-default text-sm">
      <div className="container py-8 px-4">
        <div className="flex flex-row flex-wrap gap-x-12 gap-y-4 justify-between">
          {footerData?.contents?.map((content) => {
            if (content?.__typename === "ComponentSharedLinkLists") {
              return <LinkList key={content.id} linkList={content} />;
            }
          })}
          <div key="contact">
            <ul className="list-none">
              <li>
                <span className="font-bold text-lg">{club.name}</span>
              </li>
              <li>{club.address.street}</li>
              <li>
                {club.address.zip} {club.address.city}
              </li>
              <li>{club.contact.email}</li>
              <li>Telefon {club.contact.telephone}</li>
              <li>Fax {club.contact.telefax}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container px-4 py-2 border-t border-neutral-400 text-neutral-600">
        <div>{footerData?.copyright}</div>
        <div></div>
      </div>
    </footer>
  );
}
