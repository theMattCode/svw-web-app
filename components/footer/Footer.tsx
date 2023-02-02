import { ContactData, FooterData } from "#/lib/graphql/homepage.gql";
import { LinkList } from "#/components/linklist/LinkList";

export default function Footer({
  labelLeft,
  labelRight,
  linkLists,
  contact,
}: FooterData & { contact?: ContactData | null }): JSX.Element {
  return (
    <footer className="mt-12 bg-neutral-200 border-t-4 border-svw-blue-default text-sm">
      <div className="container py-8 px-4">
        <div className="flex flex-row flex-wrap gap-x-12 gap-y-4 justify-between">
          {linkLists?.map((linkList) => (
            <LinkList key={linkList!.id} linkList={linkList!} />
          ))}
          {contact && (
            <div key="contact">
              <ul className="list-none">
                <li>
                  <span className="font-bold text-lg">{contact.name}</span>
                </li>
                <li>{contact.street}</li>
                <li>
                  {contact.postalCode} {contact.city}
                </li>
                <li>{contact.email}</li>
                <li>Telefon {contact.telephone}</li>
                <li>Fax {contact.telefax}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="container px-4 py-2 border-t border-neutral-400 text-neutral-600">
        <div>{labelLeft}</div>
        <div>{labelRight}</div>
      </div>
    </footer>
  );
}
