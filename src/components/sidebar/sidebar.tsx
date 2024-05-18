import { BiArrowBack } from "react-icons/bi";
import { SidebarContent } from "./sidebar-content";

export function Sidebar() {
  return (
    <div className="min-h-screen h-full bg-white w-[325px] relative overflow-hidden">
      <div className="min-h-full min-w-full bg-[#1f2a40] rounded-tr-3xl overflow-hidden rounded-br-3xl">
        <SidebarContent />
      </div>
      <button className="absolute top-[50%] -right-3 text-[#1f2a40] bg-white flex items-center justify-center rounded-tl-full rounded-bl-full px-2 py-5">
        <BiArrowBack size={35} />
      </button>
    </div>
  );
}
