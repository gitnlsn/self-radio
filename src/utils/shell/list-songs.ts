import { execPromise } from "./exec";

export const listSongs = async () => {
  return await execPromise("ls ~/Music | jq -Rn '[inputs]'").then(
    ({ stdout }) => {
      return JSON.parse(stdout) as string[];
    },
  );
};
