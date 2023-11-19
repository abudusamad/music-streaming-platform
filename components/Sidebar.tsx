"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import SidebarItem from "./SidebarItem";



interface SidebarProps {
	children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
    const pathname = usePathname();
    const routes = useMemo(() => [{
        icon: HiHome,
        label: "Home",
        href: "/",
        active: pathname !== "/search"

    },
        {
            icon: BiSearch,
            label: "Search",
            href: "/search",
            active: pathname === "/search"
        }
    ],[pathname])
    return <div >
        <div>
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    label={route.label}
                    icon={route.icon}
                    href={route.href}
                />
         ))}
        </div>
        {children}
    </div>;
};

export default Sidebar;
