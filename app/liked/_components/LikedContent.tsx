"use client";

import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";

import LikeButton from "@/components/LikeButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { useUser } from "@/hooks/useUser";
import { LikeButtonSkeleton } from "@/loading/skeletons";
import { Song } from "@/types";

interface LikedContentProps {
	songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
	const router = useRouter();
	const { isLoading, user } = useUser();

	const onPlay = useOnPlay(songs);

	useEffect(() => {
		if (!isLoading && !user) {
			router.replace("/");
		}
	}, [isLoading, user, router]);

	if (songs.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center ">
				<p className="text-neutral-400 text-3xl font-semibold my-4">
					No songs Liked
				</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-y-2 w-full p-6">
			{songs.map((song: any) => (
				<div key={song.id} className="flex items-center gap-x-4 w-full">
					<div className="flex-1">
						<MediaItem onClick={(id) => onPlay(id)} data={song} />
					</div>
					<Suspense fallback={<LikeButtonSkeleton />}>
						<LikeButton songId={song.id} />
					</Suspense>
				</div>
			))}
		</div>
	);
};

export default LikedContent;
