import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    label: string;
    icon: IconType;
    href: string;
    active?: boolean;

}

const SidebarItem = ({
    label,
    icon: Icon,
    href,
    active,
}:SidebarItemProps) => {
    return (
        <Link href={href}
            className={
                twMerge(`
                flex
                items-center
                flex-row
                h-auto
                w-full
                gap-x-4
                text-md
                font-medium
                hover:text-white
                transition
                text-neutral-400
                py-1

                `,
                active && "text-white"
                )

            }
        
        >
            <Icon size={26} />
            <p className="truncate w-full">{label}</p>
        </Link>
        
    )
}
 
export default SidebarItem;