import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  FileText,
  Users,
  Globe,
  Home
} from "lucide-react";
import { BsTelephone } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="w-60 min-h-screen bg-white border-r p-6">
      
      <h2 className="font-bold text-lg mb-8 tracking-wide">
        ARCH BUILD
      </h2>

      <ul className="space-y-2">
        <SidebarItem
          to="/dashboard"
          label="Dashboard"
          icon={<LayoutDashboard size={18} />}
        />

        <SidebarItem
          to="/projects"
          label="Projects"
          icon={<Building2 size={18} />}
        />

        <SidebarItem
          to="/drawings"
          label="Drawings"
          icon={<FileText size={18} />}
        />

        <SidebarItem
          to="/clients"
          label="Clients / Collaboration"
          icon={<Users size={18} />}
        />

        <SidebarItem
          to="/international-projects"
          label="International Projects"
          icon={<Globe size={18} />}
        />

        <SidebarItem
          to="/realtor"
          label="Realtor"
          icon={<Home size={18} />}
        />

          <SidebarItem
          to="/customer care"
          label="Costumer Services"
          icon={<BsTelephone size={18} />}
        />

      </ul>
    </div>
  );
};

const SidebarItem = ({ to, label, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 rounded transition text-sm
          ${
            isActive
              ? "bg-black text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`
        }
      >
        {icon}
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

export default Sidebar;


