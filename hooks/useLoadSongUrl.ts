import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLaodSongUrl = (songs: Song) => {
	const supabaseClient = useSupabaseClient();

	if (!songs) {
		return "";
	}

	const { data: songData } = supabaseClient.storage
		.from("songs")
		.getPublicUrl(songs.songs_path);
	return songData.publicUrl;
};

export default useLaodSongUrl;
