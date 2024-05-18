import { Link } from "react-router-dom";

export default function SidebarListItem({ isActive, icon, label, to }: any) {
  return (
    <Link to={to||"/"} className={`flex items-center gap-4 pl-10 ${isActive && 'active_gradient rounded-r-full p-2'}`}>
      <div>{icon}</div>
      <div className="">{label}</div>
    </Link>
  );
}
