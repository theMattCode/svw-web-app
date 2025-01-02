import { MdOutlineAccountCircle, MdOutlineMenu, MdOutlineNotifications, MdOutlineSearch } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import Image from "next/image";

export function Header({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <div className="w-full h-16 p-4 flex justify-between items-center">
      <div className="w-full flex gap-2">
        <MdOutlineMenu className="w-6 h-6 @5xl:hidden" onClick={onOpenMenu} />
        <MdOutlineSearch className="w-6 h-6" />
      </div>
      <div className="flex gap-2 text-gray-400">
        <VscGithub className="w-6 h-6" />
        <MdOutlineNotifications className="w-6 h-6" />
        <MdOutlineAccountCircle className="w-6 h-6" />
      </div>
    </div>
  );
}
