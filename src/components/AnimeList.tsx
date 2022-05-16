import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Anime } from "../types";
import AnimeItem from "./AnimeItem";

export default function AnimeList() {
  const animes = useSelector(
    (state: { animes: { animes: Anime[] } }) => state.animes.animes
  );

  console.log(animes);

  return (
    <div className="mt-5 flex flex-wrap">
      {animes.map((anime) => (
        <AnimeItem key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}
