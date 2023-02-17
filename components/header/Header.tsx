import Link from "next/link";
import { Page, SocialMediaData } from "#/lib/graphql/homepage.gql";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import CallToActionButton from "#/components/button/CallToActionButton";
import { FaBars, FaFileSignature, FaSearch } from "react-icons/fa";
import { MainNavigation } from "#/components/header/MainNavigation";
import { useState } from "react";
import SmallScreenNavigation from "#/components/header/SmallScreenNavigation";

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
      <SmallScreenHeader
        menuItems={menuItems}
        logo={logo}
        socialMedia={socialMedia}
      />
      <LargeScreenHeader
        menuItems={menuItems}
        logo={logo}
        socialMedia={socialMedia}
      />
    </header>
  );
}

function SmallScreenHeader({
  menuItems,
  socialMedia,
  logo,
}: MenuProps): JSX.Element {
  return (
    <div className="md:hidden flex flex-row place-content-between h-16 align-middle bg-svw-blue-default text-white">
      <div />
      <div className="z-30">
        {logo && (
          <Link href="/">
            <Image
              src={getFullAssetUrl(logo)}
              alt=""
              width={64}
              height={64}
              className="h-16"
            />
          </Link>
        )}
      </div>
      <SmallScreenNavigation menuItems={menuItems} socialMedia={socialMedia} />
    </div>
  );
}

function LargeScreenHeader({
  menuItems,
  logo,
  socialMedia,
}: MenuProps): JSX.Element {
  return (
    <div className="hidden md:flex flex-col">
      <div className="flex flex-row flex-1 text-white bg-svw-blue-darker">
        <div className="container text-sm">
          <AccessHeader socialMedia={socialMedia} />
        </div>
      </div>

      <div className="bg-svw-blue-default text-white">
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
