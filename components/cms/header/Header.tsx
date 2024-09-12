import { MdOutlineAccountCircle, MdOutlineNotifications } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import Image from "next/image";

export function Header() {
  return (
    <div className="w-full h-16 p-4 flex items-center justify-between border-b border-gray-300 bg-gray-50">
      <div className="w-full flex gap-2">
        <Image src="/media/svw-emblem.svg" alt="SVW Emblem" width={48} height={48} />
        <div className="font-medium text-xl text-center content-center">Sportverein Walddorf 1904 e.V.</div>
      </div>
      <div className="flex gap-2 text-gray-400">
        <VscGithub className="w-6 h-6" />
        <MdOutlineNotifications className="w-6 h-6" />
        <MdOutlineAccountCircle className="w-6 h-6" />
      </div>
    </div>
  );
}
