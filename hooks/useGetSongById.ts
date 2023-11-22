import { Song } from "@/types";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

const useGetSongById = (id?: string) => {
	const [isLoading, setIsLoading] = useState(false);
	const [song, setSong] = useState<Song | undefined>(undefined);

	const { supabaseClient } = useSessionContext();

	useEffect(() => {
		const fetchData = async () => {
			const { data, error } = await supabaseClient
				.from("songs")
				.select("*")
				.eq("id", id)
				.single();
			if (error) {
				setSong(undefined);
				return toast.error(error.message);
			}
			setSong(data as Song);
			setIsLoading(false);
		};
		fetchData();
	}, [id, supabaseClient]);

	return useMemo(() => ({ isLoading, song }), [isLoading, song]);
};

export default useGetSongById;
