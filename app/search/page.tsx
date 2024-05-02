import getSongsByTitle from "@/actions/getSongsByTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./_components/SearchContents";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
	title: "Search",
	description: "Search page",
};


interface SearchProps {
	searchParams: { title: string };
}

const Search = async ({ searchParams }: SearchProps) => {
	const songs = await getSongsByTitle(searchParams.title);
	return (
		<div className="flex flex-col min-h-screen 	bg-neutral-900 w-full overflow-hidden overflow-y-auto rounded-lg">
			<div
			>
				<Header className="from-bg-neutral-900">
					<div className="mb-2 flex flex-col gap-y-6">
						<h1 className="text-white text-3xl font-semibold">Search</h1>
						<SearchInput />
					</div>
				</Header>
				<SearchContent songs={songs} />
			</div>
			<Footer />
		</div>
	);
};

export default Search;
