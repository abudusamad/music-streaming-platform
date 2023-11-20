import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import SupabaseProvider from "@/providers/SupabaseProivder";
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
					<Sidebar>{children}</Sidebar>
				</SupabaseProvider>
			</body>
		</html>
	);
}
