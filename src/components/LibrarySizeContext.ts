import { createContext } from "react";

export enum sizeOptions {
  SMALL = 3,
  MEDIUM = 2,
  LARGE = 1,
}


export const LibrarySizeContext = createContext<sizeOptions>(sizeOptions.MEDIUM);
