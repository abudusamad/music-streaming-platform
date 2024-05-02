// Loading animation
 export const shimmer =
	"before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function PopularSongsItemSkeleton() {
	return (
        <div className={`${shimmer}relative group flex flex-col items-center justify-center overflow-hidden gap-x-4cursor-pointer hover:bg-neutral-400/5 transition p-3`}>
			<div className="relative aspect-square w-full h-full rounded-full overflow-hidden"></div>
			<div className="flex flex-col items-start w-full pt-4">
				<p className="text-neutral-100 text-sm pb-4 w-full truncate"></p>
				<p className="text-neutral-400 text-sm ">Artist</p>
			</div>
			<div
				className="
        absolute bottom-16 right-5"
			></div>
		</div>
	);
}

export function SongsItemSkeleton() {
	return (
		<>
			<SongsItemSkeleton />
			<SongsItemSkeleton />
			<SongsItemSkeleton />
			<SongsItemSkeleton />
		</>
	);
}
