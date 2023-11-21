"use client";

import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

interface PageContentProps {
	songs: Song[];
}

const PageContent = ({ songs }: PageContentProps) => {
	const onPlay = useOnPlay(songs);
	if (songs.length !== 0) {
		return <div className="mt-4 text-neutral-400">No Songs Avialable</div>;
	}

	return (
		<div>
			{songs.map((song) => (
                <SongItem
                    onClick={(id: string) => onPlay(id)}
                    key={song.id}
                    {...song}
                
                />
			))}
		</div>
	);
};

export default PageContent;
