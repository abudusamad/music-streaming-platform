"use client";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";
import { useEffect, useState } from "react";
interface ModalProviderProps {
	product: ProductWithPrice[];
}

const ModalProvider = ({ product }: ModalProviderProps) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}
	return (
		<>
			<AuthModal />
			<UploadModal />
		</>
	);
};

export default ModalProvider;
