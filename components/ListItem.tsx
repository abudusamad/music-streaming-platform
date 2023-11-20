"use client";

import { FaPlay } from "react-icons/fa"; 

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem = ({
    image,
    name,
    href,
}: ListItemProps) => {
    const router = useRouter();
    const onClick = () => {
        //handle the click user
        router.push(href);
    };
    return (
        <button onClick={onClick} className=" relative group flex items-center rounded-md
        overflow-hidden gap-x-4 bg-neutral-100/10
        cursor-pointer hover:bg-neutral-100/20 transition
        ">
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image
                    className="object-cover"
                    src={image}
                    fill
                    alt="Image"
                
                />
            </div>
            <p className=" font-medium truncate py-5 ">
                {name}
            </p>
            <div className="absolute transition flex items-center justify-center rounded-full bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110 opacity-0">
                <FaPlay className= "text-black" />
            </div>
        </button>
     );
}
 
export default ListItem;