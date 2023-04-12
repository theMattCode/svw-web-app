import { AccessHeaderData } from "#/app/data.gql";
import Link from "next/link";
import Image from "next/image";
import { getFullAssetUrl } from "#/lib/asset";
import CallToActionButton from "#/components/button/CallToActionButton";
import { FaFileSignature, FaShoppingCart } from "react-icons/fa";
import { SearchField } from "#/components/header/SearchField";

type AccessHeaderProps = {
  accessHeaderData?: AccessHeaderData | null;
};

export function AccessHeader({
  accessHeaderData,
}: AccessHeaderProps): JSX.Element {
  return (
    <div className="flex flex-row text-white place-content-end gap-4">
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
      {accessHeaderData?.shopLinks?.data.map((shop) => {
        if (shop && shop.attributes?.url) {
          return (
            <Link key={shop.id} href={shop.attributes.url} target="_blank">
              <CallToActionButton text={shop.attributes?.name}>
                <FaShoppingCart />
              </CallToActionButton>
            </Link>
          );
        }
      })}
      <Link href="/mitglied-werden" className="px-1">
        <CallToActionButton text="Mitglied werden">
          <FaFileSignature />
        </CallToActionButton>
      </Link>
    </div>
  );
}
