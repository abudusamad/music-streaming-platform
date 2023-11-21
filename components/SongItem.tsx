import { Song } from "@/types";

interface SongItemProps {
    onClick: (id: string) => void;
    data: Song;
}

const SongItems = ({
    onClick,
    data
}:SongItemProps) => {
    return (<div>
        
    </div> );
}
 
export default SongItems;