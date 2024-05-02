import UseLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface PopularSongItemProps {
	data: Song;
	onClick: (id: string) => void;
}

const PopularSongsItem = ({ onClick, data }: PopularSongItemProps) => {
	const imagePath = UseLoadImage(data);

	return (
		<div className="relative group flex flex-col items-center justify-center overflow-hidden gap-x-4cursor-pointer hover:bg-neutral-400/10 transition p-3">
			<div className="relative aspect-square w-full h-full rounded-full overflow-hidden">
				<Image
					fill
					src={imagePath || "/images/placeholder.png"}
					alt="Image"
					className="object-cover"
				/>
			</div>
			<div className="flex flex-col items-start w-full pt-4 gap-y-1">
				
				<p className="text-neutral-100 text-sm pb-4 w-full truncate">
				{data.author}
				</p>
			</div>
			<div
				onClick={() => onClick(data.id)}
				className="
        absolute bottom-24 right-5"
			>
				<PlayButton />
			</div>
		</div>
	);
};

export default PopularSongsItem;
