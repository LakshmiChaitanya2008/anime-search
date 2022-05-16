import React from "react";
import { Link } from "react-router-dom";
import { Anime } from "../types";

export default function AnimeItem({ anime }: { anime: Anime }) {
  return (
    <div className="w-[200px] border-2 border-white transition-all hover:scale-105 cursor-pointer m-2">
      <Link to={`/${anime.mal_id}`}>
        <img
          src={anime.images.jpg.large_image_url}
          alt="Naruto"
          className="w-full h-auto"
        />
        <div className="flex p-2 justify-between">
          <h1 className="text-xl">{anime.title}</h1>
          <span className="text-lg mt-[2px] text-[#FFD700]">{anime.score}</span>
        </div>
      </Link>
    </div>
  );
}
