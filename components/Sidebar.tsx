"use client";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";


import SidebarItem from "./SidebarItem";
import Box from "./Box";
import { useMemo } from "react";

interface SidebarProps {
	children: React.ReactNode;

}

const Sidebar = ({ children}: SidebarProps) => {
	const pathname = usePathname();

	const routes = useMemo(
		() => [
			{
				icon: HiHome,
				label: "Home",
				active: pathname !== "/search",
				href: "/",
			},
			{
				icon: BiSearch,
				label: "Search",
				href: "/search",
				active: pathname === "/search",
			},
		],
		[pathname]
	);

	return (
        <div
            className="flex h-full" 
		
		>
			<div
				className="
          hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-black 
          h-full 
          w-[300px] 
          p-2
        "
			>
				<Box>
					<div className="flex flex-col gap-y-4 px-5 py-4">
						{routes.map((item) => (
							<SidebarItem key={item.label} {...item} />
						))}
					</div>
				</Box>
				<Box className="overflow-y-auto h-full">
					Libaray
				</Box>
            </div>
            <main>
                {children}
            </main>
		</div>
	);
};

export default Sidebar;
