import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { getPersonName, Person } from "#/content/people";
import { BsPersonBoundingBox as Placeholder } from "react-icons/bs";
import { calcImageDimensionsForWidth } from "#/lib/image";
import { CardContent, CardTitle } from "#/components/web/card/Card";

type PersonImageProps = { person: Person };

export function PersonImage({ person }: PersonImageProps) {
  const { image } = person;

  if (image) {
    const { width, height } = image ? calcImageDimensionsForWidth(image, 512) : { width: 0, height: 0 };
    return (
      <Image
        src={image.src}
        alt={getPersonName(person)}
        width={width}
        height={height}
        quality={85}
        className="object-cover aspect-4/5 @md:w-48 @xl:w-60"
      />
    );
  }

  return <Placeholder className="text-gray-300 object-cover aspect-4/5 @md:w-48 @xl:w-60" />;
}

type PersonCardProps = { person: Person | undefined };

export function PersonCard({ person }: PersonCardProps) {
  if (person === undefined) return null;

  return (
    <div className="w-full @container ">
      <div className="bg-white w-full h-full @container flex flex-col @md:flex-row transition-all pb-4 @md:pb-0">
        {person.image && <PersonImage person={person} />}
        <CardContent>
          <CardTitle>{getPersonName(person)}</CardTitle>
          <div className="font-normal">{person.tags.join(", ")}</div>
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
        </CardContent>
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
