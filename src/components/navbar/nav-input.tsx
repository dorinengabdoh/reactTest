import { IoSearch } from "react-icons/io5";

export default function NavInput() {
  return (
    <div className="bg-[#f1f2fa] rounded-3xl relative gap-2 px-4  flex items-center">
      <IoSearch className="text-[#424242]" />
      <input
        placeholder="Search"
        className="bg-transparent max-w-28 py-2 flex-auto placeholder:text-[#424242]"
      />
    </div>
  );
}
