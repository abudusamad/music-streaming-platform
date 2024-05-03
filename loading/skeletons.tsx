import { Skeleton } from "@/components/ui/skeleton";

// Loading animation
export const shimmer =
	"before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const DashboardSkeleton = () => {
	return (
		<div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto ">
			<div className="bg-gradient-to-b bg-neutral-900 p-6">
				<div className="w-full mb-4 flex items-center justify-between">
					<div className="hidden md:flex gap-x-2 items-center">
						<div className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 tranistion">
							<div className={shimmer} />
						</div>
						<div className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 tranistion">
							<div className={shimmer} />
						</div>
					</div>
					<div className="flex md:hidden gap-x-2 items-center">
						<div className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 tranistion">
							<div className={shimmer} />
						</div>
						<div className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 tranistion">
							<div className={shimmer} />
						</div>
					</div>
				</div>
				<div className="relative z-10">
					<h2 className="text-2xl font-normal">
						<div className={shimmer} />
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
					>
						<div className="bg-white p-4 rounded-lg">
							<div className={shimmer} />
						</div>
					</div>
				</div>
			</div>
			<div className="mt-2 mb-7 px-6">
				<div className="flex justify-between items-center">
					<h1 className="text-white text-3xl font-semibold">
						<div className={shimmer} />
					</h1>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
					{Array.from({ length: 8 }).map((_, i) => (
						<Skeleton key={i} />
					))}
				</div>
			</div>
			<div className="mt-2 mb-7 px-6">
				<div className="flex justify-between items-center">
					<h1 className="text-white text-3xl font-semibold">
						<div className={shimmer} />
					</h1>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
					{Array.from({ length: 8 }).map((_, i) => (
						<Skeleton key={i} />
					))}
				</div>
			</div>
		</div>
	);
};

export const SkeletonMediaItem = () => {
	return (
		<div
			className="
		flex 
        items-center 
        gap-x-3 
        w-full 
        p-2 
        rounded-md animate-pulse"
		>
			<div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
				<Skeleton className="absolute inset-0 bg-neutral-800" />
			</div>
			<div className="flex flex-col gap-y-1 overflow-hidden">
				<Skeleton className="h-4 bg-neutral-800 w-80" />
				<Skeleton className="h-4 bg-neutral-800 w-1/2" />
			</div>
		</div>
	);
};
