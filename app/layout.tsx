import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import SupabaseProvider from "@/providers/SupabaseProivder";
import UserProvider from "@/providers/UserProvider";
const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "music streaming app",
	description: "Listen to music",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<SupabaseProvider>
					<UserProvider>
						<Sidebar>{children}</Sidebar>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
}
