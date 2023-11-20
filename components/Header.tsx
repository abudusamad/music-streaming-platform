"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
	const router = useRouter();
	const handleLogout = () => {
		//Preparing the logout request
	};
	return (
		<div
			className={twMerge(
				`h-fit
        bg-gradient-to-b
        from-emerald-800 p-6`,
				className
			)}
		>
			<div className="w-full mb-4 flex items-center justify-between">
				<div className="hidden md:flex gap-x-2 items-center">
					<button
						onClick={() => router.back()}
						className="rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-75
                    tranistion
                    "
					>
						<RxCaretLeft size={35} />
					</button>
					<button
						onClick={() => router.forward()}
						className="rounded-full
                    bg-black
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-75
                    tranistion
                    "
					>
						<RxCaretRight size={35} />
					</button>
				</div>
				<div className="flex md:hidden gap-x-2 items-center">
					<button
						onClick={() => router.push("/")}
						className="
                    rounded-full
                    bg-white
                    p-2
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    tranistion
                    "
					>
						<HiHome className="text-black" size={20} />
					</button>
					<button
						onClick={() => router.push("/search")}
						className="
                    rounded-full
                    bg-white
                    p-2
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    tranistion
                    "
					>
						<BiSearch className="text-black" size={20} />
					</button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <>
                        <div>
                            <Button
                                className="bg-transparent 
                                text-neutral-300
                                font-medium"
                            >
                                

                                
                                Sign up

                            </Button>
                        </div>
                         <div>
                            <Button
                                className="bg-white px-6 py-1"
                            >
                                

                                
                                Sign in

                            </Button>
                        </div>
                    </>

                </div>
			</div>
		</div>
	);
};

export default Header;