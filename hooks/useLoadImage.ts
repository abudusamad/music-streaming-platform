import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const UseLoadImage = (songs: Song) => {
	const supabaseClient = useSupabaseClient();

	if (!songs) {
		return null;
	}

	const { data: imageData } = supabaseClient.storage
		.from("images")
		.getPublicUrl(songs.image_path);
	return imageData.publicUrl;
};

export default UseLoadImage;
