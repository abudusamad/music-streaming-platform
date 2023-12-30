
import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import Image from "next/image";
import LikedContent from "./_components/LikedContent";

export const revalidate = 0;

const LikedPage = async () => {
    const songs = await getLikedSongs();

	return (
		<div className="bg-neutral-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
			<Header className="bg-gradient-r from-blue-800 bg-purple-700">
				<div className="flex flex-col md:flex-row items-center gap-x-5">
					<div className="relative h-32 w-32 lg:h-44 lg:w-44">
						<Image
							fill
							src="/images/liked.png"
							alt="Liked songs"
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<div className="flex flex-col gap-y-2 mt-4 md:mt-0">
						<p className="hidden md:block font-semibold text-sm">Playlist</p>
						<h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
							Liked Songs
						</h1>
					</div>
				</div>
			</Header>
			<LikedContent songs={songs} />
		</div>
	);
};

export default LikedPage;
