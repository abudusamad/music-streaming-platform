"use client";

import Box from "@/components/Box";

import { ScaleLoader } from "react-spinners";

const Loading = () => {
	return (
		<Box className="h-full flex items-center justify-center">
			<ScaleLoader color="#22c55e" loading={true} />
		</Box>
	);
};

export default Loading;
