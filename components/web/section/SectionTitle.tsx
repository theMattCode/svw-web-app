import { getId } from "#/lib/page";
import Image from "next/image";
import { ComponentType } from "react";

interface Props {
  title: string;
  Icon?: ComponentType<{ className?: string }>;
}

export function SectionTitle({ title, Icon }: Props) {
  return (
    <div className="w-full flex border-b-svw-blue-default border-b-4 text-svw-blue-default" id={getId(title)}>
      {Icon ? (
        <Icon className="w-8 h-8 flex self-center" />
      ) : (
        <Image src={"/media/svw-logo.svg"} alt="icon" width={32} height={32} />
      )}
      <div className=" text-4xl font-bold  uppercase p-2 whitespace-nowrap truncate">{title}</div>
    </div>
  );
}
