import { IoIosNotifications } from "react-icons/io";
import NavInput from "./nav-input";
import { BiChevronDown } from "react-icons/bi";

export default function LargeNavbar() {
  return (
    <div className="flex items-center justify-between gap-3">
      <h4 className="text-xl">Dashboard</h4>
      <div className="flex items-center gap-3">
        <NavInput />

        <div>
          <IoIosNotifications size={25} />
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/vite.svg"
            className="w-10 h-10 rounded-full overflow-hidden bg-[#c6c5c5]"
          />
          <span>FON TEBOH</span>
          <BiChevronDown size={25} />
        </div>
      </div>
    </div>
  );
}
