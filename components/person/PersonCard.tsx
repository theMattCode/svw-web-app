import { Person } from "#/components/person/people.gql";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import Link from "next/link";
import { Heading } from "#/components/heading/Heading";
import { asTagsString } from "#/lib/tags";
import { PropsWithChildren } from "react";

type Props = {
  person: Person;
};

export function PersonCard({ person }: Props): JSX.Element {
  const picture = person.picture?.data?.attributes;
  return (
    <div className="mb-8 flex flex-col md:max-w-[768px] shadow-lg">
      <Heading text={`${person.firstname} ${person.lastname}`} />
      <div className="flex flex-col md:flex-row bg-white">
        <Image
          className="w-full h-96 md:h-auto object-cover md:w-56 p-1"
          src={getFullAssetUrl(picture?.url ?? "")}
          alt=""
          width={picture?.width ?? 0}
          height={picture?.height ?? 0}
        />
        <div className="w-full p-6 flex flex-col justify-start">
          <h4 className="mb-2">{asTagsString(person.tags)}</h4>
          {person.description && (
            <p className="text-gray-700 text-base mb-4">{person.description}</p>
          )}
          <div className="flex flex-col md:grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-4">
            {person.email && (
              <ContactDetail label="E-Mail">
                <Link href={`mailto:${person.email}`}>{person.email}</Link>
              </ContactDetail>
            )}

            {person.telephone && (
              <ContactDetail label="Telefon">
                <Link href={`tel:${person.telephone}`}>{person.telephone}</Link>
              </ContactDetail>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type ContactDetailProps = {
  label: string;
};
function ContactDetail({
  label,
  children,
}: PropsWithChildren<ContactDetailProps>) {
  return (
    <>
      <span className="text-gray-600 text-sm pt-2">{label}</span>
      <span className="text-gray-600 text-sm font-bold truncate md:pt-2">
        {children}
      </span>
    </>
  );
}
