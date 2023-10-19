import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { getPersonName, Person } from "#/content/people";
import { GoPersonFill } from "react-icons/go";
import { calcImageDimensionsForWidth } from "#/lib/image";

type Props = {
  person: Person | undefined;
};

export function PersonCard({ person }: Props) {
  if (person === undefined) return null;

  const imageDimensions = person.image ? calcImageDimensionsForWidth(person.image, 400) : { width: 400, height: 400 };

  return (
    <div className="container flex flex-col  md:min-w-[550px] md:flex-row bg-white shadow-lg">
      {person.image ? (
        <Image
          className="w-full h-80 md:h-auto object-cover md:w-48 p-1"
          src={person.image.src}
          alt={person.image.alt}
          width={imageDimensions.width}
          height={imageDimensions.height}
        />
      ) : (
        <GoPersonFill className="w-full h-80 md:h-auto object-cover md:w-48 p-1 text-gray-300" />
      )}
      <div className="w-full p-4 flex flex-col justify-start">
        <div className="text-3xl">{getPersonName(person)}</div>
        <div className="font-medium">{person.tags.join(", ")}</div>
        <div className="flex flex-col md:grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-4">
          {person.email && (
            <ContactDetail label="E-Mail">
              <Link href={`mailto:${person.email}`}>{person.email}</Link>
            </ContactDetail>
          )}

          {person.phone && (
            <ContactDetail label="Telefon">
              <Link href={`tel:${person.phone}`}>{person.phone}</Link>
            </ContactDetail>
          )}
        </div>
      </div>
    </div>
  );
}

type ContactDetailProps = {
  label: string;
};
function ContactDetail({ label, children }: PropsWithChildren<ContactDetailProps>) {
  return (
    <>
      <span className="text-gray-600 text-sm pt-2">{label}</span>
      <span className="text-gray-600 text-sm font-bold truncate md:pt-2">{children}</span>
    </>
  );
}
