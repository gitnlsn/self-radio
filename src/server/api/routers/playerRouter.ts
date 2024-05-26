import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { listSongs } from "~/utils/shell/list-songs";
import { playSong } from "~/utils/shell/playSong";
import { stopAll } from "~/utils/shell/stopAll";

export const playerRouter = createTRPCRouter({
  listSongs: publicProcedure.query(async () => {
    return await listSongs();
  }),

  playSong: publicProcedure
    .input(
      z.object({
        songName: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return await playSong(input.songName);
    }),

  stopAll: publicProcedure.mutation(async () => {
    return await stopAll();
  }),
});
