import { club } from "#/content/club";
import { footer } from "#/content/footer";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-neutral-200 border-t-4 border-svw-blue-default text-sm">
      <div className="container py-8 px-4">
        <div className="flex flex-row flex-wrap gap-x-12 gap-y-4 justify-between">
          {footer.blocks?.map((block) => {
            return (
              <ul key={block.title} className="list-none">
                <li key="title">
                  <span className="font-bold text-lg">{block.title}</span>
                </li>
                {block.links.map((link) => (
                  <li key={link.title} className="flex items-center h-6">
                    {link.extern && (
                      <span className="pr-1">
                        <HiOutlineExternalLink className="text-black" />
                      </span>
                    )}
                    <Link href={link.url} target={link.extern ? "_blank" : ""}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            );
          })}
          <ul key="contact" className="list-none">
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
      <div className="container px-4 py-2 border-t border-neutral-400 text-neutral-600">
        <div>{club.copyright}</div>
      </div>
    </footer>
  );
}
