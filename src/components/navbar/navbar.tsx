import LargeNavbar from "./large-navbar";
import SmallNavbar from "./small-navbar";

export function Navbar() {
  return (
    <div className="bg-white p-5 flex-auto">
      <div className="hidden md:block">
        <LargeNavbar />
      </div>
      <div className="md:hidden">
        <SmallNavbar />
      </div>
    </div>
  );
}
