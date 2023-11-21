import { Song } from "@/types";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
	const authModal = useAuthModal();
	const { user } = useUser();

	const onPlay = (id: string) => {
		if (!user) {
			return authModal.onOpen;
		}
	};
	return onPlay;
};

export default useOnPlay;
