import { AiOutlinePlus } from "react-icons/ai";
import { RxCaretRight } from "react-icons/rx";
import { TbPlaylist } from "react-icons/tb";
import { TooltipMenu } from "./Tooltip";

const Library = () => {
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between px-5 pt-4">
				<div className="inline-flex items-center gap-x-2">
					<TbPlaylist
						className="text-neutral-400  hover:text-white transition"
						size={26}
					/>
                    <p className="text-neutral-400 font-medium hover:text-white transition-all">
                        Your Library
					</p>
				</div>
				<div className="flex items-center justify-center gap-x-2">
					<AiOutlinePlus
						className="text-neutral-400 hover:text-white transition rounded-full bg-black bg-opacity-20 hover:bg-opacity-30 p-1"
						size={30}
					/>
					<RxCaretRight
						className="text-neutral-400 hover:text-white transition rounded-full bg-black bg-opacity-20 hover:bg-opacity-30 p-1"
						size={30}
					/>
				</div>
			</div>
		</div>
	);
};

export default Library;
