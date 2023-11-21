"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
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

	const { user } = useUser();
	const authModal = useAuthModal();
	const supabaseClient = useSupabaseClient();


	const handleLogout = async () => {
		const { error } = await supabaseClient.auth.signOut();
		router.refresh();

		if (error) {
			toast.error(error.message);
		}
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
					{user ? (
						<div className="flex gap-x-4 items-center">
							<Button onClick={handleLogout} className="bg-white px-6 py-2">
								Logout
							</Button>
							<Button
								onClick={() => router.push("/account")}
								className="bg-white"
							>
								<FaUserAlt />
							</Button>
						</div>
					) : (
						<>
							<div>
								<Button
									onClick={authModal.onOpen}
									className="bg-transparent 
                                text-neutral-300
                                font-medium"
								>
									Sign up
								</Button>
							</div>
							<div>
								<Button
									onClick={authModal.onOpen}
									className="bg-white px-6 py-1"
								>
									Sign in
								</Button>
							</div>
						</>
					)}
				</div>
			</div>
			{children}
		</div>
	);
};

export default Header;
