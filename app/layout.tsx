import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import SupabaseProvider from "@/providers/SupabaseProivder";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import getActiveProductsWithPrices from "@/actions/getActiveProductWithPrice";
import ToastProvider from "@/providers/ToastProvider";
import getSongByUserId from "@/actions/getSongByUserId";
const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "music streaming app",
	description: "Listen to music",
};

export const revalidate = 0;

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
	}) {
	const products = await getActiveProductsWithPrices();
	const userSongs = await getSongByUserId();
	return (
		<html lang="en">
			<body className={font.className}>
				<ToastProvider/>
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider product={products}/>
						<Sidebar songs={userSongs}>
							{children}</Sidebar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
