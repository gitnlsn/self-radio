import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { api } from "~/utils/api";

export default function Home() {
  const listSongsQuery = api.player.listSongs.useQuery();
  const playSongMutation = api.player.playSong.useMutation();
  const stopAllMutation = api.player.stopAll.useMutation();

  return (
    <div className="flex flex-col items-center">
      <div className="sticky top-0 flex h-16 w-full flex-row items-center px-4 shadow-lg backdrop-blur-sm">
        <button
          className="rounded-full border-2 bg-white p-2"
          onClick={async () => {
            await stopAllMutation.mutateAsync();
          }}
        >
          <div className=" h-4 w-4 bg-slate-600"></div>
        </button>
      </div>

      <div className="my-4 grid max-w-4xl grid-cols-1 gap-4 lg:grid-cols-2">
        {listSongsQuery.data?.map((song) => (
          <div
            key={song}
            className="flex flex-row justify-between gap-4 border-2 p-2 transition-all hover:border-slate-300"
          >
            <p>{song}</p>
            <button
              onClick={async () => {
                await playSongMutation.mutateAsync({ songName: song });
              }}
            >
              <PlayCircleIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
