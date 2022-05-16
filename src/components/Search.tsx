import { useDispatch, useSelector } from "react-redux";
import { setAnimes, setSearch } from "../store/anime";

export default function Search() {
  const dispatch = useDispatch();
  const search = useSelector(
    (state: { animes: { search: string } }) => state.animes.search
  );
  const handleSearch = async function (e: any) {
    e.preventDefault();
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`);
    const data = await response.json();
    dispatch(setAnimes(data.data));
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for any anime..."
          className="bg-[#2b2b29] border-white border-2 rounded-md w-full py-2 text-xl px-2 mt-4"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </form>
    </div>
  );
}
