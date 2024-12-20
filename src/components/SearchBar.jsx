import { IoMdSearch } from "react-icons/io";
const SearchBar = () => {
  return (
    <form className="flex items-center gap-[2px]">
      <input
        type="text"
        name="search"
        placeholder="Search Product"
        className="max-w-md p-[11px] border border-black rounded-l-md"
      />
      <button className="btn rounded-l-none rounded-r-md btn-outline bg-gray-300">
        <IoMdSearch size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
