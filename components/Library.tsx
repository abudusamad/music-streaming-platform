import useAuthModal from "@/hooks/useAuthModal";
import useOnPlay from "@/hooks/useOnPlay";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { AiOutlinePlus } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "./MediaItem";

interface LibraryProps {
	songs: Song[];
}

const Library = ({ songs }: LibraryProps) => {
	const { user } = useUser();
	const authModal = useAuthModal();
	const uploadModal = useUploadModal();

	const onPlay = useOnPlay(songs);

	const onClick = () => {
		if (!user) {
			authModal.onOpen();
		}
		return uploadModal.onOpen();
	};
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
						onClick={onClick}
						className="text-neutral-400 hover:text-white transition rounded-full bg-black bg-opacity-20 hover:bg-opacity-30 p-1"
						size={30}
					/>
					<GoArrowRight
						className="text-neutral-400 hover:text-white transition rounded-full bg-black bg-opacity-20 hover:bg-opacity-30 p-1"
						size={30}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-y-2 mt-4 px-3">
				{songs.map((song) => (
					<MediaItem
						key={song.id}
						onClick={(id: string) => onPlay(id)}
						data={song}
					/>
				))}
			</div>
		</div>
	);
};

export default Library;
