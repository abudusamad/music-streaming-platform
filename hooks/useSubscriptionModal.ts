import { create } from "zustand";

interface SubscriptionModalStore {
	isOpen: boolean;
	onClose: () => void;
	onOpen: () => void;
}

const useSubscriptionModal = create<SubscriptionModalStore>((set) => ({
	isOpen: false,
	onClose: () => set({ isOpen: false }),
	onOpen: () => set({ isOpen: true }),
}));

export default useSubscriptionModal;
