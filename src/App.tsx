import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnimeList from "./components/AnimeList";
import Search from "./components/Search";
import { setAnimes } from "./store/anime";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: { animes: { search: string } }) => state);
  useEffect(() => {
    const getAnimes = async () => {
      const response = await fetch("https://api.jikan.moe/v4/anime");
      const data = await response.json();
      dispatch(setAnimes(data.data));
    };
    if (state.animes.search === "") {
      getAnimes();
    }
  }, []);
  return (
    <div className="max-w-4xl my-0 mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-3xl">Anime Search</h1>
        <Search />
      </div>
      <AnimeList />
    </div>
  );
}

export default App;
