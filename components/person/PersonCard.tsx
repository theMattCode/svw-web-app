import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { getPersonName, Person } from "#/content/people";
import { BsPersonBoundingBox as Placeholder } from "react-icons/bs";
import { calcImageDimensionsForWidth } from "#/lib/image";

type Props = {
  person: Person | undefined;
};

export function PersonCard({ person }: Props) {
  if (person === undefined) return null;

  const imageDimensions = person.image ? calcImageDimensionsForWidth(person.image, 400) : { width: 400, height: 400 };

  const joinedTags = `${person.tags.join(", ")}`;
  return (
    <div className="container @container">
      <div className="bg-white shadow-lg flex flex-col @md:flex-row">
        {person.image ? (
          <Image
            className="p-1 w-full h-80 object-cover transition-all @md:h-auto @md:w-48"
            src={person.image.src}
            alt={`${person.firstname} ${person.lastname} - ${joinedTags}`}
            width={imageDimensions.width}
            height={imageDimensions.height}
          />
        ) : (
          <Placeholder className="p-1 w-full h-80 text-gray-300 object-cover @md:h-auto @md:w-48" />
        )}
        <div className="w-full p-4 flex flex-col justify-start">
          <div className="text-xl">{getPersonName(person)}</div>
          <div className="font-normal">{joinedTags}</div>
          <div className="flex flex-col @md:grid @-md:grid-cols-[auto_minmax(0,1fr)] @md:gap-x-4">
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
      <span className="text-gray-600 text-sm font-bold truncate @md:pt-2">{children}</span>
    </>
  );
}
