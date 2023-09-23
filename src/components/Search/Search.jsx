import { HiOutlineSearch } from "react-icons/hi";

const Search = () => {
	return (
		<div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
			<div className="p-5">
				<div className="flex items-center justify-center gap-x-2 px-2">
					<input
						type="text"
						placeholder="search doctors"
						className="p-3 outline-none shadow-md w-72 border-2 border-slate-300"
					/>
					<input
						type="text"
						placeholder="Filter"
						className="p-3 outline-none shadow-md w-72 border-2 border-slate-300"
					/>
					<button className="btn rounded-none bg-cyan-600 hover:bg-cyan-700 text-white border-none">
						<HiOutlineSearch size={24} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Search;
