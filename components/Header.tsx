"use client";

import { twMerge } from "tailwind-merge";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header = ({children, className}:HeaderProps) => {
    return (<div className={twMerge(
        `h-fit
        bg-gradient-to-b
        from-emerald-800 p-6`,
        className
    )}>
        Header
    </div> );
}
 
export default Header;