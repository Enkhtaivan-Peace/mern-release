"use server";
import AnimeCard from "./AnimeCard";
import { IAnimeProp } from "./AnimeList";
import { AnimeServices } from "./anime.services";

export const fetchAnimes = async (page: number) => {
  const data = await AnimeServices.getAnimeList({ page });
  return data.map((item: IAnimeProp, idx: number) => (
    <AnimeCard key={"anime" + idx} {...item} idx={idx} />
  ));
};
