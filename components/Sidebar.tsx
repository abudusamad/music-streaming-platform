"use client";

import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

import { useMemo } from "react";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types";

interface SidebarProps {
	children: React.ReactNode;
	songs: Song[];
}

const Sidebar = ({ children, songs }: SidebarProps) => {
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
		<div className="flex h-full">
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
					<div className="flex flex-col gap-y-4 py-4 px-5">
						{routes.map((item) => (
							<SidebarItem key={item.label} {...item} />
						))}
					</div>
				</Box>
				<Box className="overflow-y-auto h-full">
					<Library songs={ songs} />
				</Box>
			</div>
			<main className="h-full flex-1 overflow-y-auto py-2">
				{children}
			</main>
		</div>
	);
};

export default Sidebar;
