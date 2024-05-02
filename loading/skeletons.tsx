// Loading animation
export const shimmer =
	"before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const DashboardSkeleton = () => {
	return (
		<div
			className={`${shimmer}bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto `}
		>
			<div className="relative z-10">
				<h2 className="text-2xl font-normal">
				</h2>
				<div
					className="grid 
					grid-cols-1
					sm:grid-cols-2
					md:grid-cols-2
					lg:grid-cols-3
					2xl:grid-cols-4
					gap-4
					mt-4
					"
				></div>
					<LikedSkeleton />
			</div>

			<div className="mt-2 mb-7 px-6">
				<div className="flex justify-between items-center">
					<h1 className="text-white text-3xl font-semibold"></h1>
				</div>
				<PopularSkeleton />
			</div>
			<div className="mt-2 mb-7 px-6">
				<div className="flex justify-between items-center">
					<h1 className="text-white text-3xl font-semibold"></h1>
				</div>
				<SongSkeleton />
			</div>
		</div>
	);
};


export const LikedSkeleton = () => {
	return (
		<div className={`${shimmer}bg-neutral-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto`}>
			<div className="bg-gradient-r from-blue-800 bg-purple-700">
				<div className="flex flex-col md:flex-row items-center gap-x-5">
					<div className="relative h-32 w-32 lg:h-44 lg:w-44">
						<div className="object-cover"></div>
					</div>
					<div className="flex flex-col gap-y-2 mt-4 md:mt-0">
						<p className="hidden md:block font-semibold text-sm">Playlist</p>
						<h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
						</h1>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-y-2 w-full p-6">
				<div className="flex items-center gap-x-4 w-full">
					<div className="flex-1">
						<div className="object-cover"></div>
					</div>
				</div>
			</div>
		</div>
	);
};


export const SongSkeleton = () => {
	return (
		<div className={`${shimmer}flex items-center gap-x-4 w-full`}>
			<div className="flex-1">
				<div className="h-10 bg-neutral-700 rounded-md"></div>
				<div className="h-5 bg-neutral-700 rounded-md w-1/2"></div>
			</div>
			<div className="flex items-center gap-x-4">
				<div className="h-10 w-10 bg-neutral-700 rounded-md"></div>
				<div className="h-10 w-10 bg-neutral-700 rounded-md"></div>
			</div>
		</div>
	);
};


export const PopularSkeleton = () => {
	return (
		<div className="flex items-center gap-x-4 w-full">
			<div className="flex-1">
				<div className="h-10 bg-neutral-700 rounded-md"></div>
				<div className="h-5 bg-neutral-700 rounded-md w-1/2"></div>
			</div>
			<div className="flex items-center gap-x-4">
				<div className="h-10 w-10 bg-neutral-700 rounded-md"></div>
				<div className="h-10 w-10 bg-neutral-700 rounded-md"></div>
			</div>
		</div>
	);
};


export const ArtistSkeleton = () => {
	return (
		<div className="flex items-center gap-x-4 w-full">
			<div className="flex-1">
				<div className="h-10 bg-neutral-700 rounded-md"></div>
				<div className="h-5 bg-neutral-700 rounded-md w-1/2"></div>
			</div>
			<div className="flex items-center gap-x-4">
				<div className="h-10 w-10 bg-neutral-700 rounded-md"></div>
				<div className="h-10 w-10 bg-neutral-700 rounded-md"></div>
			</div>
		</div>
	);
};


