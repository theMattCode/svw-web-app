import { Person } from "#/components/person/people.gql";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import Link from "next/link";
import { Heading } from "#/components/heading/Heading";
import { asTagsString } from "#/lib/tags";

type Props = {
  person: Person;
};

export function PersonCard({ person }: Props): JSX.Element {
  const picture = person.picture?.data?.attributes;
  return (
    <div className="mb-8 flex flex-col shadow-lg">
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
              <>
                <span className="text-gray-600 text-sm pt-2">E-Mail</span>
                <span className="text-gray-600 text-sm font-bold text-svw-blue-default overflow-ellipsis md:pt-2">
                  <Link href={`mailto:${person.email}`}>{person.email}</Link>
                </span>
              </>
            )}

            {person.email && (
              <>
                <span className="text-gray-600 text-sm pt-2">Telefon</span>
                <span className="text-gray-600 text-sm font-bold text-svw-blue-default md:pt-2">
                  <Link href={`tel:${person.telephone}`}>
                    {person.telephone}
                  </Link>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
