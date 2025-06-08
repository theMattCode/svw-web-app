import { getId } from "#/lib/page";
import Image from "next/image";

interface Props {
  title: string;
}

export function SectionTitle({ title }: Props) {
  return (
    <div className="w-full flex border-b-svw-blue-default border-b-4" id={getId(title)}>
      <Image src={"/media/svw-logo.svg"} alt="icon" width={32} height={32} />
      <div className="text-svw-blue-default text-3xl font-bold uppercase p-2 whitespace-nowrap truncate">{title}</div>
    </div>
  );
}
