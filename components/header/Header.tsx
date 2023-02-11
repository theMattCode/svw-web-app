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

export default function Header({
  menuItems,
  logo,
  socialMedia,
}: MenuProps): JSX.Element {
  return (
    <header>
      <SmallScreenNavigation />
      <LargeScreenNavigation
        menuItems={menuItems}
        logo={logo}
        socialMedia={socialMedia}
      />
    </header>
  );
}

function SmallScreenNavigation(): JSX.Element {
  return <div className="md:hidden">not yet implemented</div>;
}

function LargeScreenNavigation({
  menuItems,
  logo,
  socialMedia,
}: MenuProps): JSX.Element {
  console.dir(menuItems, { depth: null });
  return (
    <div className="hidden md:block ">
      <div className="flex flex-col">
        <div className="flex flex-row flex-1 bg-svw-blue-default">
          <div className="container text-sm">
            <AccessHeader socialMedia={socialMedia} />
          </div>
        </div>
        <div className="container">
          <MainNavigation logo={logo} menuItems={menuItems} />
        </div>
      </div>
    </div>
  );
}

type AccessHeaderProps = {
  socialMedia: SocialMediaData[];
};

function AccessHeader({ socialMedia }: AccessHeaderProps): JSX.Element {
  return (
    <div className="flex flex-row text-white place-content-end">
      {socialMedia?.map((item) => (
        <Link key={item.name} href={item.url ?? ""} target="_blank">
          <Image
            src={getFullAssetUrl(item.icon?.data?.attributes?.url ?? "")}
            alt=""
            width={28}
            height={28}
          />
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
