import { shimmer } from "@/loading/skeletons";



export default function Loading() {
    return (
			<div
				className={`${shimmer}flex items-center justify-center h-screen w-full`}
			>
				<div className="flex flex-col items-center justify-center gap-y-4">
					<div className="animate-pulse bg-neutral-800 h-12 w-12 rounded-full"></div>
					<div className="animate-pulse bg-neutral-800 h-4 w-32 rounded-full"></div>
				</div>
			</div>
		);
    
}