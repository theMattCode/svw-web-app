import Link from "next/link";
import { AccessHeaderData, HeaderData } from "#/app/data.gql";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import CallToActionButton from "#/components/button/CallToActionButton";
import { FaFileSignature, FaSearch } from "react-icons/fa";
import { MainNavigation } from "#/components/header/MainNavigation";
import SmallScreenNavigation from "#/components/header/SmallScreenNavigation";

type HeaderProps = {
  headerData: HeaderData | null;
};

export function Header({ headerData }: HeaderProps): JSX.Element {
  return (
    <header>
      <SmallScreenHeader headerData={headerData} />
      <LargeScreenHeader headerData={headerData} />
    </header>
  );
}

function SmallScreenHeader({ headerData }: HeaderProps): JSX.Element {
  return (
    <div className="md:hidden flex flex-row place-content-between h-16 align-middle bg-svw-blue-default text-white">
      <div />
      <div className="z-30">
        {headerData?.logo?.data?.attributes?.url && (
          <Link href="/">
            <Image
              src={getFullAssetUrl(headerData.logo?.data?.attributes?.url)}
              alt=""
              width={64}
              height={64}
              className="h-16"
            />
          </Link>
        )}
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
          <MainNavigation headerData={headerData} />
        </div>
      </div>
    </div>
  );
}

type AccessHeaderProps = {
  accessHeaderData?: AccessHeaderData | null;
};

function AccessHeader({ accessHeaderData }: AccessHeaderProps): JSX.Element {
  return (
    <div className="flex flex-row text-white place-content-end">
      {accessHeaderData?.links?.map((item) => {
        if (item) {
          return (
            <Link key={item.text} href={item.href} target="_blank">
              <Image
                src={getFullAssetUrl(item.icon?.data?.attributes?.url ?? "")}
                alt=""
                width={28}
                height={28}
              />
            </Link>
          );
        }
      })}
      <Link href="/mitglied-werden" className="px-1">
        <CallToActionButton text="Mitglied werden">
          <FaFileSignature />
        </CallToActionButton>
      </Link>
      <SearchField />
    </div>
  );
}

function SearchField(): JSX.Element {
  return (
    <form>
      <div className="relative text-black text-sm py-0.5">
        <input
          className="bg-white h-6 px-2 pr-8 focus:outline-none w-40 placeholder-gray-500"
          type="search"
          name="search"
          placeholder="Suche"
        />
        <button
          type="submit"
          className="absolute right-0 mt-1.5 top-0 mr-1.5 text-svw-blue-default"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
