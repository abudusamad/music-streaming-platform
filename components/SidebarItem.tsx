import { IconType } from "react-icons";

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
    return (<div className="flex items-center flex-cols">
        <div>
            <Icon className="h-6 w-6" />
        </div>

    </div> );
}
 
export default SidebarItem;