import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import getActiveProductsWithPrices from "@/actions/getActiveProductWithPrice";
import getSongByUserId from "@/actions/getSongByUserId";
import ClientOnly from "@/components/Client-Only";
import Player from "@/components/Player";
import { siteConfig } from "@/config/site";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProivder";
import ToastProvider from "@/providers/ToastProvider";
import UserProvider from "@/providers/UserProvider";
const font = Figtree({ subsets: ["latin"] });

export const metata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `${siteConfig.name} `,
	},
	description: siteConfig.description,
	icons: [
		{
			url: "/logo.svg",
			href: "/logo.svg",
		},
	],
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
				<ClientOnly>
					<ToastProvider />
					<SupabaseProvider>
						<UserProvider>
							<ModalProvider product={products} />
							<Sidebar songs={userSongs}>{children}</Sidebar>
							<Player />
						</UserProvider>
					</SupabaseProvider>
				</ClientOnly>
			</body>
		</html>
	);
}
