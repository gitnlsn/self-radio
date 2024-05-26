import { execPromise } from "./exec";

export const playSong = async (songName: string) => {
  return await execPromise(
    `XDG_RUNTIME_DIR=/run/user/$(id -u) mpv --no-audio-display ~/Music/${songName.replaceAll(" ", "\\ ")}`,
  )
    .then(({ stderr, stdout }) => {
      console.log(stdout);
      console.log(stderr);
      return stdout;
    })
    .catch(console.error);
};
