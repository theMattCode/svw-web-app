import Link from "next/link";
import { Page, SocialMediaData } from "#/lib/graphql/homepage.gql";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import CallToActionButton from "#/components/button/CallToActionButton";
import { FaFileSignature, FaSearch } from "react-icons/fa";
import { MainNavigation } from "#/components/header/MainNavigation";

type MenuProps = {
  menuItems: Page[];
  logo: string | undefined;
  socialMedia: SocialMediaData[];
};

export default function Header({ menuItems, logo, socialMedia }: MenuProps): JSX.Element {
  return (
    <>
      <SmallScreenNavigation />
      <LargeScreenNavigation menuItems={menuItems} logo={logo} socialMedia={socialMedia} />
    </>
  );
}

function SmallScreenNavigation(): JSX.Element {
  return <header className="md:hidden">not yet implemented</header>;
}

function LargeScreenNavigation({ menuItems, logo, socialMedia }: MenuProps): JSX.Element {
  return (
    <header className="hidden md:block">
      <div className="flex flex-col">
        <div className="flex flex-row flex-1">
          <div className="container pl-4">
            <AccessHeader socialMedia={socialMedia} />
          </div>
        </div>
        <div className="place-content-between bg-svw-blue-default mt-1">
          <div className="container pl-4 flex flex-row place-content-between items-center">
            <div className="overflow-visible h-16 z-50 md:pr-8 lg:pr-16 border-r-8 border-r-white">
              {logo && (
                <Link href="/">
                  <Image
                    src={getFullAssetUrl(logo)}
                    alt=""
                    width={128}
                    height={128}
                    style={{ transform: "translateY(-32px)" }}
                  />
                </Link>
              )}
            </div>
            <MainNavigation menuItems={menuItems} />
          </div>
        </div>
      </div>
    </header>
  );
}

type AccessHeaderProps = {
  socialMedia: SocialMediaData[];
};

function AccessHeader({ socialMedia }: AccessHeaderProps): JSX.Element {
  return (
    <div className="flex flex-row place-content-end">
      {socialMedia?.map((item) => (
        <Link key={item.name} href={item.url ?? ""} target="_blank">
          <Image src={getFullAssetUrl(item.icon?.data?.attributes?.url ?? "")} alt="" width={28} height={28} />
        </Link>
      ))}
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
      <div className="relative">
        <input
          className="text-white bg-svw-blue-default border-2 border-svw-blue-default h-8 px-2 pr-8 text-sm focus:outline-none w-40 placeholder-gray-300"
          type="search"
          name="search"
          placeholder="Suche"
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-2 text-white">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
