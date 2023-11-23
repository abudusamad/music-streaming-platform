"use client";

import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";
import { useState } from "react";
import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";

import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import Slider from "./Slider";



interface PlayerContentProps {
	song: Song;
	songUrl: string;
}

const PlayerContent = ({ song, songUrl }: PlayerContentProps) => {
	const player = usePlayer();
	const [volume, setVolume] = useState(1);
	const [isPlaying, setIsPlaying] = useState(false);

    const Icon = true ? BsPauseFill : BsPlayFill;
    const VolumeIcon = false ? HiSpeakerXMark : HiSpeakerWave;

	return (
		<div className="grid  grid-cols-2 md:grid-cols-3 h-full">
			<div className="flex w-full justify-start">
				<div className="flex items-center gap-x-4">
					<MediaItem data={song} />
					<LikeButton songId={song.id} />
				</div>
			</div>
			<div className="flex md:hidden col-auto w-full justify-end items-center">
				<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center p-1 cursor-pointer">
					<Icon size={30} className="text-black" />
				</div>
			</div>
			<div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
				<AiFillStepBackward
					size={30}
					className="text-neutral-400
            cursor-pointer hover:text-white transition"
				/>
				<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center p-1 cursor-pointer">
					<Icon size={30} className="text-black" />
				</div>
				<AiFillStepForward
					size={30}
					className="text-neutral-400
            cursor-pointer hover:text-white transition"
				/>
			</div>
			<div className="hidden md:flex w-full justify-end pr-2">
				<div className="flex items-center justify-center gap-x-2 w-[120px]">
					<VolumeIcon
                        size={34}
                        className="cursor-pointer"
                    />
                    <Slider 
                        value={volume}
                        onCjm
                    />
                    
				</div>
			</div>
		</div>
	);
};

export default PlayerContent;
