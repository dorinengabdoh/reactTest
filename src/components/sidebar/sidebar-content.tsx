import SidebarListItem from "./sitebar-list-item";
import DashboardIcon from "../../assets/icons/category.svg";
import UsersIcon from "../../assets/icons/employee.svg";
import TasksIcon from "../../assets/icons/attendanceIcon.svg";
import Payroll from "../../assets/icons/payroll.svg";
import Leave from "../../assets/icons/leaves.svg";
import Message from "../../assets/icons/messages-2.svg";
import Doc from "../../assets/icons/document-text.svg";
import MapMarker from "../../assets/icons/location.svg";
import { useLocation } from "react-router-dom";

export function SidebarContent() {
    const pathName = useLocation().pathname
  return (
    <div className="flex flex-col text-[#c9c9c9] pl-3 pr-12">
      <div className="text-center">
        <img src="/Logo.svg" alt="" className="ml-auto mr-auto mt-2" />
        <span className="font-semibold">Pour, NOBLESSE PLUS SARL</span>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        <SidebarListItem
          isActive={pathName === "/"}
          icon={<img src={DashboardIcon} />}
          label="Tableau de bord"
        />
        <SidebarListItem icon={<img src={UsersIcon} />} label="Employés" />
        <SidebarListItem icon={<img src={TasksIcon} />} label="Presence" />
        <SidebarListItem icon={<img src={Payroll} />} label="Gestion de paie" />
        <SidebarListItem icon={<img src={Leave} />} label="Gestion de congés" />
        <SidebarListItem isActive={pathName === "/location"} icon={<img src={MapMarker} />} label="Location" to="/location" />
        <SidebarListItem icon={<img src={Message} />} label="Méssagerie" />
        <SidebarListItem icon={<img src={Doc} />} label="Documents" />
      </div>
    </div>
  );
}
