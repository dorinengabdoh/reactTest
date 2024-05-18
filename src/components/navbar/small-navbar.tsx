import { MdMenu } from "react-icons/md";
import NavInput from "./nav-input";

export default function SmallNavbar() {
  return (
    <div className="flex items-center justify-between gap-3">
      <MdMenu size={25} />

      <NavInput />

      <img
        src="/vite.svg"
        className="w-10 h-10 rounded-full overflow-hidden bg-[#c6c5c5]"
      />
    </div>
  );
}
