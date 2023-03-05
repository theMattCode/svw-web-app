import { FaSearch } from "react-icons/fa";

export function SearchField(): JSX.Element {
  return (
    <form>
      <div className="relative text-black text-sm py-0.5">
        <input
          className="bg-white h-6 px-2 pr-8 focus:outline-none w-40 placeholder-gray-500"
          type="search"
          name="search"
          placeholder="Suche"
        />
        <button
          type="submit"
          className="absolute right-0 mt-1.5 top-0 mr-1.5 text-svw-blue-default"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
