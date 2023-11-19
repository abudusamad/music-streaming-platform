"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";



interface SidebarProps {
	children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
    const pathname = usePathname();
    const routes = useMemo(() => [{
        label: "Home",
        href: "/",
        active: pathname !== "/search"

    },
        {
            label: "Search",
            href: "/search",
            active: pathname === "/search"
        }
    ],[pathname])
	return <div >{children}</div>;
};

export default Sidebar;
