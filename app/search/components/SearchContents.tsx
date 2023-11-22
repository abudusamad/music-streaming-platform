"use client";

import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface SearchContentProps {
	songs: Song[];
}

const SearchContent = ({ songs }: SearchContentProps) => {
	const onPlay = useOnPlay(songs);
	if (songs.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center h-full w-full">
				<p className="text-neutral-400 text-2xl font-semibold">
					No songs found
				</p>
			</div>
		);
	}
	return (
		<div className="flex flex-col gap-y-2 w-full px-6">
			{songs.map((song) => (
                <div key={song.id}
                    className="flex items-center gap-x-4 w-full"
                >
					<div  className="flex-1">
						<MediaItem
							key={song.id}
							onClick={(id: string) => onPlay(id)}
							data={song}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default SearchContent;
