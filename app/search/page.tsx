import Header from "@/components/Header";

interface SearchProps{
    searchParams:{title:string}
}

const Search = ({
    searchParams
}:SearchProps) => {
	return (
        <div>
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">Search</h1>
                    
                </div>
            </Header>
		</div>
	);
};

export default Search;
