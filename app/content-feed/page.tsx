import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Content Feed",
	description: "Content feed page",
};	
const ContentFeedPage = () => {
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
				<div className="mb-2 flex flex-col gap-y-6">
					<h1 className="text-white text-3xl font-semibold">What&apos;s New</h1>
				</div>
				<p className="text-sm font-ligt opacity-60 flex flex-wrap">
					The lastest releases from artists, podcasts, and shows you follow.
				</p>
				<div className="flex space-x-4 mt-4 ">
					<p className="text-sm opacity-70 rounded-lg bg-neutral-700 p-2 hover:opacity-90 ">
						Music
					</p>
					<p className="text-sm opacity-70 rounded-lg bg-neutral-700 p-2 hover:opacity-90 ">
						Podcast & Shows
					</p>
				</div>
			</Header>

			<div className="flex items-center justify-center flex-col  space-y-4 p-4 top-1/4">
				<h1 className="text-2xl md:text-4xl  font-bold ">
					We don&apos;t have any updates for you yet
				</h1>
				<p className=" flexflex-wrap text-sm font-light">
					When there&apos;s news, we&apos;ll post it here. Follow your favorite
					artists and podcasts to stay updated on them too.
				</p>
			</div>

			<Footer />
		</div>
	);
};

export default ContentFeedPage;
