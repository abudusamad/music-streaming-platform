"use client";

import PopularSongsItem from "@/components/PopoularSongItem";
import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface PopularArtistProps {
	songs: Song[];
}

const PopularArtist = ({ songs }: PopularArtistProps) => {
	const onPlay = useOnPlay(songs);

	if (songs.length === 0) {
		return (
			<div className="flex justify-center items-center ">
				<h1 className="text-neutral-400 text-3xl font-semibold">
					No songs found
				</h1>
			</div>
		);
	}

	return (
		<div
			className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
      "
		>
			{songs.map((item) => (
				<PopularSongsItem
					onClick={(id: string) => onPlay(id)}
					key={item.id}
					data={item}
				/>
			))}
		</div>
	);
};

export default PopularArtist;
