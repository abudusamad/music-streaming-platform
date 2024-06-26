import getSongs from "@/actions/getSongs";
import Footer from "@/components/Footer";
import { GreetingTitle } from "@/components/GreetingTitle";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./_components/PageContent";
import PopularArtist from "./_components/PopularArtist";

export const revalidate = 0;

export default async function Home({}) {
	const songs = await getSongs();
	return (
		<div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto ">
			<Header>
				<div className="relative z-10">
					<h2 className="text-2xl font-normal">
						<GreetingTitle />
					</h2>
					<div
						className="grid 
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          2xl:grid-cols-4
          gap-4
          mt-4
          "
					>
						<ListItem
							image="/images/liked.png"
							name="Liked Songs"
							href=" liked"
						/>
					</div>
				</div>
			</Header>
			<div className="mt-2 mb-7 px-6">
				<div className="flex justify-between items-center">
					<h1 className="text-white text-3xl font-semibold">Popular Artist</h1>
				</div>

				<PopularArtist songs={songs} />
			</div>
			<div className="mt-2 mb-7 px-6">
				<div className="flex justify-between items-center">
					<h1 className="text-white text-3xl font-semibold">Newest Songs</h1>
				</div>
				<PageContent songs={songs} />
			</div>
			<Footer />
		</div>
	);
}
