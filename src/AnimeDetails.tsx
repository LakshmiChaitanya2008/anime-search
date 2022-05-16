import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Anime } from "./types";

export default function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState<Anime | null>(null);

  useEffect(() => {
    const getAnime = async () => {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await response.json();
      setAnime(data.data);
    };
    getAnime();
  }, []);
  return (
    <>
      <div className="m-7 ">
        <Link to={"/"}>
          <button className="border-2 border-white p-2">Go back</button>
        </Link>
      </div>
      <div className="md:flex max-w-5xl my-0 mx-auto md:mt-28 mt-5 mb-10">
        <img
          src={anime?.images.jpg.large_image_url}
          alt=""
          className="mx-auto"
        />
        <div className="ml-3 md:mt-0 mt-5">
          <h1 className="text-4xl font-semibold md:text-left text-center">
            {anime?.title} ({anime?.title_japanese})
          </h1>
          <p className="text-md mt-2">{anime?.synopsis}</p>
          <div className="text-xl mt-3 flex flex-col">
            <span>
              <span className="font-bold">Episodes</span>:{" "}
              {anime?.episodes ? anime.episodes : "N/A"}
            </span>
            <span>
              <span className="font-bold">Rating</span>: {anime?.score}
            </span>
            <span>
              <span className="font-bold">Year of release</span>: {anime?.year}
            </span>
            <span>
              <span className="font-bold">Status</span>: {anime?.status}
            </span>
            <span>
              <span className="font-bold">Studios</span>:{" "}
              {anime?.studios.map((studio, i) => (
                <span>
                  {studio.name}
                  {i !== anime?.studios.length - 1 && ", "}
                </span>
              ))}
            </span>
            <span>
              <span className="font-bold">Producers</span>:{" "}
              {anime?.producers.map((producer, i) => (
                <span>
                  {producer.name}
                  {i !== anime?.studios.length - 1 && ", "}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
