import Link from "next/link";
import { HeaderData } from "#/app/data.gql";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import { LargeScreenNavigation } from "#/components/header/LargeScreenNavigation";
import SmallScreenNavigation from "#/components/header/SmallScreenNavigation";
import { AccessHeader } from "#/components/header/AccessHeader";
import { Club } from "#/lib/graphql/generated";

type HeaderProps = {
  headerData: HeaderData | null;
  clubData?: Club | null;
};

export function Header({ headerData, clubData }: HeaderProps): JSX.Element {
  return (
    <header>
      <SmallScreenHeader headerData={headerData} clubData={clubData} />
      <LargeScreenHeader headerData={headerData} />
    </header>
  );
}

function SmallScreenHeader({ headerData, clubData }: HeaderProps): JSX.Element {
  return (
    <div className="md:hidden flex flex-row place-content-between h-16 align-middle bg-svw-blue-default text-white">
      <div />
      <div className="z-30">
        {clubData?.logo?.data?.attributes?.url && (
          <Link href="/">
            <Image
              src={getFullAssetUrl(clubData.logo.data.attributes.url)}
              alt=""
              width={64}
              height={64}
              className="h-16"
            />
          </Link>
        )}
      </div>
      <div className="self-center text-center text-sm sm:text-lg">
        {clubData?.name}
      </div>
      <SmallScreenNavigation headerData={headerData} />
    </div>
  );
}

function LargeScreenHeader({ headerData }: HeaderProps): JSX.Element {
  return (
    <div className="hidden md:flex flex-col">
      <div className="flex flex-row flex-1 text-white bg-svw-blue-darker">
        <div className="container text-sm">
          <AccessHeader accessHeaderData={headerData?.accessLinks} />
        </div>
      </div>

      <div className="bg-svw-blue-default text-white">
        <div className="container">
          <LargeScreenNavigation headerData={headerData} />
        </div>
      </div>
    </div>
  );
}
