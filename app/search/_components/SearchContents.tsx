"use client";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { LikeButtonSkeleton, SkeletonMediaItem } from "@/loading/skeletons";
import { Song } from "@/types";
import { Suspense } from "react";

interface SearchContentProps {
	songs: Song[];
}

const SearchContent = ({ songs }: SearchContentProps) => {
	const onPlay = useOnPlay(songs);
	if (songs.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center">
				<p className="text-neutral-400 text-2xl font-semibold">
					No songs found
				</p>
			</div>
		);
	}
	return (
		<div className="flex flex-col gap-y-2 w-full px-6">
			{songs.map((song) => (
				<div key={song.id} className="flex items-center gap-x-4 w-full">
					<div className="flex-1">
						<Suspense fallback={<SkeletonMediaItem />}>
							<MediaItem
								key={song.id}
								onClick={(id: string) => onPlay(id)}
								data={song}
							/>
						</Suspense>
					</div>
					<Suspense fallback={<LikeButtonSkeleton />}>
						<LikeButton songId={song.id} />
					</Suspense>
				</div>
			))}
		</div>
	);
};

export default SearchContent;
