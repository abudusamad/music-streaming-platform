import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";

interface SearchProps {
	searchParams: { title: string };
}

const Search = async ({ searchParams }: SearchProps) => {
	const songs = await getSongsByTitle(searchParams.title);
	return (
		<div>
			<Header className="from-bg-neutral-900">
				<div className="mb-2 flex flex-col gap-y-6">
					<h1 className="text-white text-3xl font-semibold">Search</h1>
                </div>
                <SearchInput/>
			</Header>
		</div>
	);
};

export default Search;
