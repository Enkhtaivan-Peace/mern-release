export const AnimeServices = {
  getAnimeList: async ({ page, limit }: any) => {
    const res = await fetch(
      `https://shikimori.one/api/animes?page=${page}&limit=${
        limit || 8
      }&order=popularity`,
      {
        cache: "force-cache",
      }
    );
    return await res.json();
  },
  get_ISR_AnimeList: async ({ page, limit }: any) => {
    const res = await fetch(
      `https://shikimori.one/api/animes?page=${page}&${
        limit || 8
      }=8&order=popularity`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    if (!res.ok) throw new Error("failed to fetch animes mr. Phill Anderson");

    return await res.json();
  },

  getAnimeDetail: async ({ id }: { id: number }) => {
    if (!id) {
      return { code: 404, message: "test" };
    }
    console.log("DEBUGGING: " + id);
    const res = await fetch(`https://shikimori.one/api/animes/` + id);
    return await res.json();
  },
};
