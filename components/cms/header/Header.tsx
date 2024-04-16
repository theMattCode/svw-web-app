import { MdOutlineAccountCircle, MdOutlineNotifications } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";

export function Header() {
  return (
    <div className="w-full h-16 p-4 flex items-center justify-between">
      <div></div>
      <div className="flex gap-2 text-gray-400">
        <VscGithub className="w-6 h-6" />
        <MdOutlineNotifications className="w-6 h-6" />
        <MdOutlineAccountCircle className="w-6 h-6" />
      </div>
    </div>
  );
}
