import { execPromise } from "./exec";

export const stopAll = async () => {
  return await execPromise(
    "ps aux | grep mpv | grep -v grep | awk '{print $2}' | xargs kill",
  ).catch(console.error);
};
