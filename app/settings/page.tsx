import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Settings",
    description: "Settings page",
}

const SettingsPage = () => {
	return (
		<div
			className="
            flex
             flex-col
              min-h-screen 
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
        "
		>
			<Header className="from-bg-neutral-900">
				<h1 className="text-white text-2xl font-semibold">Settings</h1>
			</Header>

			<Footer />
		</div>
	);
};

export default SettingsPage;
