"use client";

import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface PlayerContentProps {
    song: Song;
    songUrl: string;
}


const PlayerContent = ({song, songUrl}:PlayerContentProps) => {
    return (<div>
        <div>
            <div>
                <MediaItem
                    data={song}
                />
            </div>
        </div>
    </div> );
}
 
export default PlayerContent;