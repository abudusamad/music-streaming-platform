"use client";

import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import { useEffect, useState } from "react";

type MediaItemComponent = React.FC<MediaItemProps> & {
	Skeleton: React.FC;
};

interface MediaItemProps {
	data: Song;
	onClick?: (id: string) => void;
}

const MediaItem: MediaItemComponent = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])
  
  if (isLoading) {
    return <MediaItem.Skeleton />
  }

	const handleClick = () => {
		if (onClick) {
			return onClick(data.id);
		}
	};

	return (
		<div
			onClick={handleClick}
			className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
      "
		>
			<div
				className="
          relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden
        "
			>
				<Image
					fill
					src={imageUrl || "/images/music-placeholder.png"}
					alt="MediaItem"
					className="object-cover"
				/>
			</div>
			<div className="flex flex-col gap-y-1 overflow-hidden">
				<p className="text-white truncate">{data.title}</p>
				<p className="text-neutral-400 text-sm truncate">By {data.author}</p>
			</div>
		</div>
	);
};

MediaItem.Skeleton = function SkeletonMediaItem() {
	return (
		<div className="flex items-center gap-x-3 w-full p-2 rounded-md">
			<div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
				<div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
			</div>
			<div className="flex flex-col gap-y-1 overflow-hidden">
				<div className="h-4 bg-neutral-800 animate-pulse rounded w-1/2"></div>
				<div className="h-4 bg-neutral-800 animate-pulse rounded w-1/4"></div>
			</div>
		</div>
	);
};
export default MediaItem;
